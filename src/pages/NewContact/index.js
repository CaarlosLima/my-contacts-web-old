import ContactForm from 'components/ContactForm';
import PageHeader from 'components/PageHeader';
import ContactsService from 'services/ContactsService';

export default function NewContact() {
  async function handleSubmit(formData) {
    try {
      const contact = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        category_id: formData.categoryId,
      };

      const response = await ContactsService.createContacts(contact);
      console.log(response);
    } catch (error) {
      alert('Error creating contact');
    }
  }

  return (
    <>
      <PageHeader title="Novo Contato" />
      <ContactForm buttonLabel="Cadastrar" onSubmit={handleSubmit} />
    </>
  );
}
