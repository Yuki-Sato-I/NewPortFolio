import React, { useState } from 'react';
import Button, { ButtonThemes } from '../atoms/Button';
// atoms
import Input from '../atoms/Input';
import Textarea from '../atoms/Textarea';

const Contact: React.FC = () => {
  const [data, setData] = useState({
    title: '',
    email: '',
    content: ''
  });

  const handleChange = (event: any) => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    });
  }

  const send = () => {
    window.alert('現在お問い合わせを停止しております.')
  }

  return (
    <div className="contact-wrapper">
      <Input placeholder='' handleChange={handleChange} label='Title' name="title" propStyle={{margin: '0 auto'}} />
      <Input placeholder='' handleChange={handleChange} label='Email' name="email" propStyle={{margin: '0 auto'}} />
      <Textarea handleChange={handleChange} label='Content' content='' name='content' propStyle={{margin: '0 auto'}} />
      <div>
        <Button theme={[ButtonThemes.WORKMORE]} onClick={send} propStyle={{margin: '20px', backgroundColor: 'lightgray'}}>send(停止中)</Button>
      </div>
      <style jsx>{`
        .contact-wrapper {
          text-align: center;
        }
      `}</style>
    </div>
  );
}

export default Contact;