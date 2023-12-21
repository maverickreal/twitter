import './modal.css';
import '../../../index.css';

interface ModalProps {
    children: React.ReactNode;
};

export const Modal: React.FC<ModalProps> = (props: ModalProps) => (
    <div className="modal-overlay">
        <div className="modal-container bg-color">
            {props.children}
        </div>
    </div>
);