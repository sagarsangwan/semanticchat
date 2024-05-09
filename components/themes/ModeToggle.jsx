import { Shandcn } from 'shandcn';

const ToggleButton = () => {
    const toggleMode = () => {
        const shandcn = new Shandcn();
        shandcn.toggle();
    };

    return (
        <button onClick={toggleMode}>Toggle Dark Mode</button>
    );
};

export default ToggleButton;
