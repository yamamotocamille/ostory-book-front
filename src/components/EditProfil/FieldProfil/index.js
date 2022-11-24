import PropTypes from 'prop-types';

function FieldProfil({
  type,
  name,
  placeholder,
  onChange,
  value,
}) {
  // this function handlechange is here for all the input and also for the control fields
  const handleChange = (evt) => {
    onChange(evt.target.value, name);
  };

  return (
  <div className={value.length > 0 ? 'field field--has-content' : 'field'}>
      <input
        className="field-input"
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
  </div>
  );
}

FieldProfil.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
};

FieldProfil.defaultProps = {
  type: 'text',
  value: '',
  placeholder: '',
};
export default FieldProfil;
