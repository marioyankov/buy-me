import './DialogBox.css';

const DialogBox = ({
    show,
    message,
    onCancel,
    onSave,
}) => {
    return (
        <section className='dialog-box' style={{display: show ? 'block' : 'none'}}>
            <article className='dialog-box-title'>
                <h2 className='dialog-title'>Are you sure ?</h2>
                <span className="dialog-close-btn" onClick={onCancel}>&times;</span>
            </article>
            <article className='dialog-box-message'>
                <h3 className='dialog-message'>{message}</h3>
                <button className='dialog-confirm-btn' onClick={onSave}>Confirm</button>
            </article>
        </section>
    );
};

export default DialogBox;