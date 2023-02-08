import swal from "sweetalert";

<div className="col-xl-3 col-xxl-4 col-lg-4 col-md-6">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Sweet Confirm Or Cancel</h4>
              <div className="card-content">
                <div className="sweetalert mt-5">
                  <button
                    onClick={() =>
                      swal({
                        title: "Are you sure?",
                        text:
                          "Once deleted, you will not be able to recover this imaginary file!",
                        icon: "warning",
                        buttons: true,
                        dangerMode: true,
                      }).then((willDelete) => {
                        if (willDelete) {
                          swal("Poof! Your imaginary file has been deleted!", {
                            icon: "success",
                          });
                        } else {
                          swal("Your imaginary file is safe!");
                        }
                      })
                    }
                    className="btn btn-warning btn sweet-success-cancel"
                  >
                    Sweet Confirm Or Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>