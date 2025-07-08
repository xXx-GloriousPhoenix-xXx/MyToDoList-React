import './MySelect.css';

import Select from 'react-select';

const MySelect = ({options, value, onChange}) => {
    return (  
        <Select 
            classNamePrefix='MySelect'
            options={options}
            onChange={(selectedOption) => onChange(selectedOption)}
            value={value}
        />
    );
}
 
export default MySelect;