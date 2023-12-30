// import {Link} from 'react-router-dom';
import '../../style.css';
import {Link} from 'react-router-dom';
import {useAppDispatch} from "../../app/hooks.ts";
import {startEventForModal} from "../../containers/budgetSlice/budgetSlice.ts";
import reactLogo from '../../images/ic-react.png';

const Toolbar = () => {
    const dispatch = useAppDispatch();

    const clickOnContact = () => {
        dispatch(startEventForModal());
    };
  return (
    <nav className="navbar navbar-expand-lg bg-primary-subtle ps-5 pe-5 pt-2 pb-2 d-flex justify-content-between">
      <div className="d-flex align-items-center justify-content-between">
        <Link to="/admin" className="p-2">
          <img className="w-50 h-50" src={reactLogo} alt="React Logo"/>
        </Link>
        <div className="d-flex align-items-center flex-column">
          <span>Test work 9</span>
          <strong>Application "Budget calculation"</strong>
        </div>
      </div>
      <div className="d-flex gap-3">
        <Link to="/admin/dishes" className="links">Categories</Link>
        <Link to="/add-expense" onClick={clickOnContact} className="links">Add</Link>
      </div>
    </nav>
);
};

export default Toolbar;