import React, { Fragment } from "react";
import PageTItle from "../../../../layouts/PageTitle";
import swal from "sweetalert";

const Element = () => {
  return (
    <Fragment>
      <PageTItle motherMenu="Form" activeMenu="Edit Table" />
        <div className="col-xl-20 col-lg-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Edit Table Terpilih</h4>
            </div>
            <div className="card-body">
              <div className="basic-form">
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="row">
                    <div className="form-group mb-3 col-md-3">
                      <label>Nama</label>
                      <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group mb-3 col-md-3">
                      <label>Kategori</label>
                      <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group mb-3 col-md-3">
                      <label>Lokasi</label>
                      <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group mb-3 col-md-3">
                      <label>Harga</label>
                      <input type="text" className="form-control"/>
                    </div>
                    <div class="cs-form mb-3 col-md-3">
                      <label>Waktu</label>
                      <input type="time" class="form-control" value="10:05 AM" />
                    </div> 
                    <div class="mb-3">
                      <label for="exampleFormControlTextarea1" class="form-label">Deskripsi</label>
                      <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-success"
                  onClick={() =>
                    swal({
                      title: "Are you sure?",
                      text: "Once deleted, you will not be able to recover this imaginary file!",
                      icon: "warning",
                      buttons: true,
                      dangerMode: true,
                    }).then((willDelete) => {
                      if (willDelete) {
                        swal(
                          "Poof! Your imaginary file has been deleted!",
                          {
                            icon: "success",
                          }
                        );
                      } else {
                        swal(
                          "Your imaginary file is safe!"
                        );
                      }
                    })
                  }
                  >
                    Save
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
    </Fragment>
  );
};

export default Element;
