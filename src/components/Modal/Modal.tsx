import Backdrop from "../Backdrop/Backdrop";
import {useAppDispatch, useAppSelector} from "../../app/hooks.ts";
import {actionForModal, endEventForModal, startEventForModal} from "../../containers/budgetSlice/budgetSlice.ts";
import {useNavigate} from "react-router-dom";


const Modal = () => {
    const dispatch = useAppDispatch();
    const actionModal = useAppSelector(actionForModal);
    const navigate = useNavigate();

    const onInnerClick = (event: React.MouseEvent) => {
        event.stopPropagation();
    };

    const handleOnClickBack = () => {
        dispatch(startEventForModal());
    };

    const closeModal = () => {
        dispatch(endEventForModal());
    };

    const closeAndBackToHome = () => {
        dispatch(endEventForModal());
        navigate('/');
    };

    return (
        <>
            {actionModal && <Backdrop show={actionModal} onClick={handleOnClickBack}/>}
            <div style={{display: actionModal ? 'block' : 'none'}} className="modal actionModal mt-5"
                 onClick={closeModal}>
                <div className="modal-dialog" onClick={onInnerClick}>
                    <div className="modal-content">
                        <div className="d-flex justify-content-end p-2">
                            <button type="button" className="btn-close" onClick={closeModal}/>
                        </div>
                        <div className="modal-body">
                            <form className="bg-light p-3 border border-4 rounded-3 input-form">
                                <div className="mb-2">
                                    <div className="form-group mb-3">
                                        <label htmlFor="select-from">Type</label>
                                        <select
                                            id="select-from"
                                            className="form-select mt-2"
                                            required>
                                            <option value="">Choose type</option>
                                            <option value="expense">Expense</option>
                                            <option value="income">Income</option>
                                        </select>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label htmlFor="select-from">Category</label>
                                        <select
                                            id="select-from"
                                            className="form-select mt-2"
                                            required>
                                            <option value="">Choose categoty</option>
                                            <option value="salary">Salary</option>
                                            <option value="drinks">Drinks</option>
                                            <option value="programming">Programming</option>
                                            <option value="food">Food</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="d-flex flex-column mb-3">
                                    <div className="mb-1">
                                        <label htmlFor="input-content" className="form-label">Amount</label>
                                    </div>
                                    <div className="d-flex">
                                        <input id="input-content" type="text" className="form-control"/>
                                        <span className="input-group-text">KGS</span>
                                    </div>
                                </div>
                                <div className=" d-flex gap-2">
                                    <button
                                        type="button"
                                        className=" btn btn-secondary"
                                        onClick={closeAndBackToHome}>Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className=" btn btn-success">
                                        Save
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;