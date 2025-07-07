import './MySelect.css';

import Select from 'react-select';

const MySelect = ({options, onChange}) => {
    return (  
        <Select 
            classNamePrefix='MySelect'
        />
    );
}
 
export default MySelect;