import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Button, Modal, Form } from 'react-bootstrap';
import API from '../../api'; //✅ import your base API URL//

const AddCategory = () => {
  const [categories, setCategories] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ name: '', description: '' });
  const [editId, setEditId] = useState(null);

  // Load categories
  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    const res = await axios.get(`${API}/api/mainpagecategory`);
    setCategories(res.data);
  };

  // Handle form input change
  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Open modal for add or edit
  const handleShowAdd = () => {
    setForm({ name: '', description: '' });
    setEditId(null);
    setShowModal(true);
  };

  const handleShowEdit = (category) => {
    setForm({ name: category.name, description: category.description });
    setEditId(category._id);
    setShowModal(true);
  };

  // Submit form (Create or Update)
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editId) {
      // Update
      await axios.put(`${API}/api/mainpagecategory/${editId}`, form);
    } else {
      // Create
      await axios.post(`${API}/api/mainpagecategory`, form);
    }
    setShowModal(false);
    fetchCategories();
  };

  // Delete category
  const handleDelete = async (id) => {
    if (window.confirm('Are you sure to delete?')) {
      await axios.delete(`${API}/api/mainpagecategory/${id}`);
      fetchCategories();
    }
  };

  return (
  <div className="container py-5">
  <section className="p-4 rounded-4 shadow-sm bg-white border border-primary border-2">
    <div className="d-flex justify-content-between align-items-center mb-4 border-bottom pb-3">
      <h2 className="fw-bold text-primary">📁 Main Page Categories</h2>
      <Button variant="primary" onClick={handleShowAdd}>
        ➕ Add New Category
      </Button>
    </div>

    <div className="table-responsive">
      <Table striped bordered hover className="rounded-3 overflow-hidden shadow-sm">
        <thead className="table-primary">
          <tr>
            <th>Name</th>
            <th style={{ width: '150px' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((cat) => (
            <tr key={cat._id}>
              <td>{cat.name}</td>
              <td>
                <div className="d-flex gap-2">
                  <Button variant="outline-primary" size="sm" onClick={() => handleShowEdit(cat)}>
                     Edit
                  </Button>
                  <Button variant="outline-danger" size="sm" onClick={() => handleDelete(cat._id)}>
                     Delete
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>

    {/* Modal Form */}
    <Modal show={showModal} onHide={() => setShowModal(false)} centered>
      <Modal.Header closeButton className="bg-primary text-white">
        <Modal.Title>{editId ? '✏️ Edit Category' : '➕ Add New Category'}</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label className="fw-semibold text-black">Category Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Enter category name"
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="btn btn-outline-secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="primary  " type="submit">
            {editId ? 'Update' : 'Add'}
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  </section>
</div>

  );
};

export default AddCategory;
// 
