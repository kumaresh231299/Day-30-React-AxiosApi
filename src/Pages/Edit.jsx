import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Edit({ id }) {
  const navigate = useNavigate();
  const [editData, setEditData] = useState(undefined);
  const [loading, setLoading] = useState(true);
  const [create, setCreate] = useState({
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: "",
      },
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  });

  useEffect(() => {
    if (id) {
      fetchData();
    } else {
      setLoading(false);
    }
  }, [id]);

  const fetchData = async () => {
    await axios
      .get(`https://665872ed5c361705264882b8.mockapi.io/api/users/${id}`)
      .then((res) => {
        setEditData(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (isNested, name, nestedType, value) => {
    if (!isNested) {
      setEditData((prev) => ({
        //callbackFunc
        ...prev,
        [name]: value,
      }));
    } else if (nestedType === "address") {
      setEditData(prev => ({
        ...prev,
        address: {
          ...prev.address,
          [name]: value
        }
      }));
    } else if (nestedType === "geo") {
      setEditData(prev => ({
        ...prev,
        address: {
          ...prev.address,
          geo: {
            ...prev.address.geo,
            [name]: value
          }
        }
      }));
    } else if (nestedType === "company") {
      setEditData(prev => ({
        ...prev,
        company: {
          ...prev.company,
          [name]: value
        }
      }));
    }
  };

  const handleCreateChange = (isNested, name, nestedType, value) => {
    if (!isNested) {
      setCreate((prev) => ({
        //callbackFunc
        ...prev,
        [name]: value,
      }));
    } else if (nestedType === "address") {
      setCreate(prev => ({
        ...prev,
        address: {
          ...prev.address,
          [name]: value
        }
      }));
    } else if (nestedType === "geo") {
      setCreate(prev => ({
        ...prev,
        address: {
          ...prev.address,
          geo: {
            ...prev.address.geo,
            [name]: value
          }
        }
      }));
    } else if (nestedType === "company") {
      setCreate(prev => ({
        ...prev,
        company: {
          ...prev.company,
          [name]: value
        }
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editData) {
      await axios
        .put(
          `https://665872ed5c361705264882b8.mockapi.io/api/users/${id}`,
          editData
        )
        .then((res) => navigate(-1))
        .catch((err) => console.log(err));
    } else {
      await axios
        .post(`https://665872ed5c361705264882b8.mockapi.io/api/users`, create)
        .then((res) => navigate(-1))
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      {loading ? (
        <h1 className="mt-3">Loading...</h1>
      ) : (
        <div>
          <h1 className="mt-3">
            {editData ? "Update Details" : "Create User"}
          </h1>
          <div className="container">
            <form className="row g-3" onSubmit={handleSubmit}>
              {editData && (
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name="id"
                    value={editData?.id}
                    readOnly
                  />
                  <label>ID</label>
                </div>
              )}
              <div className="card">
                <div className="fw-bold fs-5">User Details</div>
                <div className="card-body">
                  <div className="row">
                    <div className="form-floating mb-3 col-md-4">
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={editData ? editData?.name : create?.name}
                        onChange={(e) =>
                          editData
                            ? handleChange(false, "name", "", e.target.value)
                            : handleCreateChange(false, "name", "", e.target.value)
                        }
                        required
                      />
                      <label> Name </label>
                    </div>
                    <div className="form-floating mb-3 col-md-4">
                      <input
                        type="text"
                        className="form-control"
                        name="username"
                        value={editData ? editData?.username : create?.username}
                        onChange={(e) =>
                          editData
                            ? handleChange(false, "username", "", e.target.value)
                            : handleCreateChange(
                              false,
                              "username",
                              "",
                              e.target.value
                            )
                        }
                        required
                      />
                      <label>Username</label>
                    </div>
                    <div className="form-floating mb-3 col-md-4">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={editData ? editData?.email : create?.email}
                        onChange={(e) =>
                          editData
                            ? handleChange(false, "email", "", e.target.value)
                            : handleCreateChange(false, "email", "", e.target.value)
                        }
                        required
                      />
                      <label>E-mail</label>
                    </div>
                    <div className="form-floating mb-3 col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        name="street"
                        value={
                          editData
                            ? editData?.address?.street
                            : create?.address?.street
                        }
                        onChange={(e) =>
                          editData
                            ? handleChange(true, "street", "address", e.target.value)
                            : handleCreateChange(true, "street", "address", e.target.value)
                        }
                        required
                      />
                      <label>Street</label>
                    </div>
                    <div className="form-floating mb-3 col-md-3">
                      <input
                        type="text"
                        className="form-control"
                        name="suite"
                        value={
                          editData
                            ? editData?.address?.suite
                            : create?.address?.suite
                        }
                        onChange={(e) =>
                          editData
                            ? handleChange(true, "suite", "address", e.target.value)
                            : handleCreateChange(true, "suite", "address", e.target.value)
                        }
                        required
                      />
                      <label>Suite</label>
                    </div>
                    <div className="form-floating mb-3 col-md-3">
                      <input
                        type="text"
                        className="form-control"
                        name="city"
                        value={
                          editData
                            ? editData?.address?.city
                            : create?.address?.city
                        }
                        onChange={(e) =>
                          editData
                            ? handleChange(true, "city", "address", e.target.value)
                            : handleCreateChange(true, "city", "address", e.target.value)
                        }
                        required
                      />
                      <label>City</label>
                    </div>
                    <div className="form-floating mb-3 col-md-4">
                      <input
                        type="text"
                        className="form-control"
                        name="zipcode"
                        value={
                          editData
                            ? editData?.address?.zipcode
                            : create?.address?.zipcode
                        }
                        onChange={(e) =>
                          editData
                            ? handleChange(true, "zipcode", "address", e.target.value)
                            : handleCreateChange(
                              true,
                              "zipcode",
                              "address",
                              e.target.value
                            )
                        }
                        required
                      />
                      <label>Zip</label>
                    </div>
                    <div className="form-floating mb-3 col-md-4">
                      <input
                        type="text"
                        className="form-control"
                        name="lat"
                        value={
                          editData
                            ? editData?.address?.geo?.lat
                            : create?.address?.geo?.lat
                        }
                        onChange={(e) =>
                          editData
                            ? handleChange(true, "lat", "geo", e.target.value)
                            : handleCreateChange(true, "lat", "geo", e.target.value)
                        }
                        required
                      />
                      <label>lat</label>
                    </div>
                    <div className="form-floating mb-3 col-md-4">
                      <input
                        type="text"
                        className="form-control"
                        name="lng"
                        value={
                          editData
                            ? editData?.address?.geo?.lng
                            : create?.address?.geo?.lng
                        }
                        onChange={(e) =>
                          editData
                            ? handleChange(true, "lng", "geo", e.target.value)
                            : handleCreateChange(true, "lng", "geo", e.target.value)
                        }
                        required
                      />
                      <label>lng</label>
                    </div>
                    <div className="form-floating mb-3 col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        name="phone"
                        value={editData ? editData?.phone : create?.phone}
                        onChange={(e) =>
                          editData
                            ? handleChange(false, "phone", "", e.target.value)
                            : handleCreateChange(false, "phone", "", e.target.value)
                        }
                        required
                      />
                      <label> phone </label>
                    </div>
                    <div className="form-floating mb-3 col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        name="website"
                        value={editData ? editData?.website : create?.website}
                        onChange={(e) =>
                          editData
                            ? handleChange(false, "website", "", e.target.value)
                            : handleCreateChange(
                              false,
                              "website", "",
                              e.target.value
                            )
                        }
                        required
                      />
                      <label> website </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="fw-bold fs-5">Company Details</div>
                <div className="card-body">
                  <div className="row">
                    <div className="form-floating mb-3 col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={
                          editData
                            ? editData?.company?.name
                            : create?.company?.name
                        }
                        onChange={(e) =>
                          editData
                            ? handleChange(true, "name", "company", e.target.value)
                            : handleCreateChange(true, "name", "company", e.target.value)
                        }
                        required
                      />
                      <label> name </label>
                    </div>
                    <div className="form-floating mb-3 col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        name="bs"
                        value={
                          editData ? editData?.company?.bs : create?.company?.bs
                        }
                        onChange={(e) =>
                          editData
                            ? handleChange(true, "bs", "company", e.target.value)
                            : handleCreateChange(true, "bs", "company", e.target.value)
                        }
                        required
                      />
                      <label> bs </label>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control"
                        name="catchPhrase"
                        value={
                          editData
                            ? editData?.company?.catchPhrase
                            : create?.company?.catchPhrase
                        }
                        onChange={(e) =>
                          editData
                            ? handleChange(true, "catchPhrase", "company", e.target.value)
                            : handleCreateChange(
                              true,
                              "catchPhrase",
                              "company",
                              e.target.value
                            )
                        }
                        required
                      />
                      <label> catchPhrase </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 mb-5">
                <button
                  className={editData ? "btn btn-danger" : "btn btn-success"}
                  type="submit"
                >
                  {editData ? "Update" : "Create"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
export default Edit;
