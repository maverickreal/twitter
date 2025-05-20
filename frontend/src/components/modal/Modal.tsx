import './modal.css';
import '../../../index.css';

interface ModalProps {
    children: React.ReactNode;
};

export const Modal = (props: ModalProps): JSX.Element => {
    return (
        <div className="modal-overlay">
            <div className="modal-container bg-color">
                {props.children}
            </div>
        </div>
    );
};
