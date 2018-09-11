import React, {
    Component
} from 'react'

export default class SideBar extends Component {

    render() {
        return ( 
            
            <div className="col-3 col-sm-2 col-md-2 col-lg-1 col-xl-1">
            <nav className="nav navbar-light navbar-toggleable-sm">
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarWEX" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse collapse flex-column mt-md-0 mt-4 pt-md-0 pt-4" id="navbarWEX">
                    <a className="nav-link navbar-brand active" href="~/Views/Forms/ControlPanel.cshtml"><span className="fa fa-home"></span></a>
                    <a href="" className="nav-link">Linnk</a>
                    <a href="" className="nav-link">Linnk</a>
                    <a href="" className="nav-link">Linnk</a>
                </div>
            </nav>
        </div>
           
        )
    }
}