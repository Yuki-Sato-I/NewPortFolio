import React from 'react';
// atoms
import Input from '../atoms/Input';
import Textarea from '../atoms/Textarea';

const Contact: React.FC = (props: any) => {
  return (
    <div className="contact-wrapper">
      <Input placeholder='' handleChange={() => {}} label='Title' name="title" propStyle={{margin: '0 auto'}} />
      <Input placeholder='' handleChange={() => {}} label='Email' name="email" propStyle={{margin: '0 auto'}} />
      <Textarea handleChange='' label='Content' content='' name='content' propStyle={{margin: '0 auto'}} />
      <style jsx>{`
        .contact-wrapper {
          text-align: center;
        }
      `}</style>
    </div>
  );
}

export default Contact;