import React, { useState } from 'react';
import './CSS/TransformadorForm.css';  // Importa el archivo CSS
import { Button } from 'primereact/button'; 
import { Dialog } from 'primereact/dialog'; 
import 'primeicons/primeicons.css';  // Importa los iconos de PrimeIcons

const TransformadorForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    capacidad: '',
    estado: 'funcional',
  });

  const [transformadores, setTransformadores] = useState([]);
  const [editIndex, setEditIndex] = useState(null); // Mantener el índice del transformador editado
  const [visible, setVisible] = useState(false);  // Estado para controlar la visibilidad del modal

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editIndex !== null) {
      // Si estamos editando un transformador
      const updatedTransformadores = [...transformadores];
      updatedTransformadores[editIndex] = formData;
      setTransformadores(updatedTransformadores);
      setEditIndex(null); // Resetear el índice después de editar
    } else {
      // Si estamos agregando un nuevo transformador
      setTransformadores([...transformadores, formData]);
    }

    setFormData({
      nombre: '',
      capacidad: '',
      estado: 'funcional',
    });

    setVisible(false);  // Cerrar el modal después de enviar el formulario
  };

  const handleEdit = (index) => {
    setFormData(transformadores[index]); // Rellenar el formulario con los datos del transformador a editar
    setEditIndex(index); // Establecer el índice para que sepamos que estamos editando
    setVisible(true);  // Mostrar el modal para editar
  };

  const handleDelete = (index) => {
    const updatedTransformadores = transformadores.filter((_, i) => i !== index);
    setTransformadores(updatedTransformadores); // Eliminar el transformador seleccionado
  };

  return (
    <div>
      <Button
        label="Añadir Transformador"
        icon="pi pi-plus"  // Icono de Plus
        onClick={() => setVisible(true)} // Abrir el modal cuando se hace clic en el botón
      />

      {/* Modal de formulario */}
      <Dialog
        header={editIndex !== null ? 'Editar Transformador' : 'Formulario de Transformadores'}
        visible={visible}
        style={{ width: '50vw' }}
        onHide={() => setVisible(false)}  // Cerrar el modal cuando se haga clic en cerrar
      >
        <form onSubmit={handleSubmit} className="transformador-form">
          <div className="form-group">
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="capacidad">Capacidad (kVA)</label>
            <input
              type="number"
              id="capacidad"
              name="capacidad"
              value={formData.capacidad}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="estado">Estado</label>
            <select
              id="estado"
              name="estado"
              value={formData.estado}
              onChange={handleChange}
            >
              <option value="funcional">Funcional</option>
              <option value="no-funcional">No Funcional</option>
            </select>
          </div>

          <button type="submit">{editIndex !== null ? 'Actualizar' : 'Guardar'}</button>
        </form>
      </Dialog>

      {/* Tabla para mostrar los transformadores guardados */}
      {transformadores.length > 0 && (
        <div className="table-container">
          <h3>Transformadores Guardados</h3>
          <table>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Capacidad (kVA)</th>
                <th>Estado</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {transformadores.map((transformador, index) => (
                <tr key={index}>
                  <td>{transformador.nombre}</td>
                  <td>{transformador.capacidad}</td>
                  <td>{transformador.estado}</td>
                  <td>
                    <Button
                      icon="pi pi-pencil"  // Icono de lápiz para editar
                      onClick={() => handleEdit(index)}
                      className="p-button-text"
                    />
                    <Button
                      icon="pi pi-trash"  // Icono de papelera para eliminar
                      onClick={() => handleDelete(index)}
                      className="p-button-text"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default TransformadorForm;
