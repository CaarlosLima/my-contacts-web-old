import PropTypes from 'prop-types';
import { useState } from 'react';
import Button from 'components/Button';
import FormGroup from 'components/FormGroup';
import Input from 'components/Input';
import Select from 'components/Select';
import isEmailValid from 'utils/isEmailValid';
import { ButtonContainer, Form } from './styles';

export default function ContactForm({ buttonLabel }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('');
  const [errors, setErrors] = useState([]);

  function handleNameChange(event) {
    setName(event.target.value);

    if (!event.target.value?.trim()) {
      setErrors((prevErrors) => [...prevErrors, { field: 'name', message: 'Nome é obrigatório.' }]);
    } else {
      setErrors((prevErrors) => prevErrors.filter((error) => error.field !== 'name'));
    }
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);

    if (event.target.value && !isEmailValid(event.target.value)) {
      const errorAlreadyExists = errors.find((error) => error.field === 'email');

      if (errorAlreadyExists) {
        return;
      }

      setErrors((prevErrors) => [...prevErrors, { field: 'email', message: 'Email inválido.' }]);
    } else {
      setErrors((prevErrors) => prevErrors.filter((error) => error.field !== 'email'));
    }
  }

  function getErrorMessageByFieldName(fieldName) {
    return errors.find((erro) => erro.field === fieldName)?.message;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <Form onSubmit={(event) => handleSubmit(event)}>
      <FormGroup error={getErrorMessageByFieldName('name')}>
        <Input error={getErrorMessageByFieldName('name')} placeholder="Nome" value={name} onChange={handleNameChange} />
      </FormGroup>
      <FormGroup error={getErrorMessageByFieldName('email')}>
        <Input error={getErrorMessageByFieldName('email')} placeholder="Email" value={email} onChange={handleEmailChange} />
      </FormGroup>
      <FormGroup>
        <Input placeholder="Telefone" value={phone} onChange={(event) => setPhone(event.target.value)} />
      </FormGroup>
      <FormGroup>
        <Select value={category} onChange={(event) => setCategory(event.target.value)}>
          <option value="">Categoria</option>
          <option value="1">Instagram</option>
          <option value="2">Discord</option>
        </Select>
      </FormGroup>

      <ButtonContainer>
        <Button type="submit">
          {buttonLabel}
        </Button>
      </ButtonContainer>
    </Form>
  );
}

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
};
