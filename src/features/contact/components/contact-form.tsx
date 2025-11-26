import { ContactFormField } from './contact-form-field'

export function ContactForm() {
    return (
        <form className='p-4 flex flex-col gap-4 bg-primary-300 shadow-block shadow-primary-400 rounded-xl border-4 border-primary-400'>
            <div className='flex flex-wrap gap-4 *:w-full md:*:w-auto'>
                <ContactFormField label='Prénom'>
                    <input
                        type='text'
                        name='firstname'
                        required
                    />
                </ContactFormField>

                <ContactFormField label='Nom'>
                    <input type='text' name='lastname' required />
                </ContactFormField>
            </div>

            <ContactFormField label='Sujet'>
                <input type='text' name='sujet' required />
            </ContactFormField>

            <ContactFormField label='E-mail'>
                <input type='email' name='email' required />
            </ContactFormField>

            <ContactFormField label='Message'>
                <textarea
                    name='msg'
                    rows={5}
                    required
                />
            </ContactFormField>

            <button
                type='submit'
                className='cursor-pointer select-none text-white bg-primary-500 hover:bg-primary-700 active:bg-primary-200 px-4 py-2 duration-75 rounded disabled:bg-primary-900 disabled:text-white/80 disabled:cursor-not-allowed'
            >
                Envoyer
            </button>
        </form>
    );
}
