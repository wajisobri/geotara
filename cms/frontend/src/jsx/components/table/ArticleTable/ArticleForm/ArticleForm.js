import React, { Component } from "react";
import Rte from "./Rte";
import { Link } from "react-router-dom";

class ArticleForm extends Component {
   render() {
      return (
         <div className="h-80">
            <div className="row">
               <div className="col-xl-12 col-xxl-12">
                  <div className="card">
                     <div className="card-header">
                        <h4 className="card-title">Form Article</h4>
                     </div>
                     <div className="card-body">
                        <div className="summernote">
                           <form onSubmit={(e) => e.preventDefault()}>
                              <div className="form-group">
                                 <label>Thumbnail</label>
                                 <div className="input-group">
                                    <div className="from-file">
                                       <input type="file" className="form-file-input form-control" />
                                    </div>
                                 </div>
                                 <label>Title Article</label>
                                 <input
                                    type="text"
                                    className="form-control mb-3"
                                    placeholder="Title Article"
                                 />
                                 <label>Article Content</label>
                                 <Rte />
                              </div>
                              <div className="form-group m-3">
                                 <Link to="/article-table" >
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                 </Link>
                              </div>
                           </form>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

export default ArticleForm;
