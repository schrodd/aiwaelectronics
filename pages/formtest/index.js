export default function formtest(){
  return (
    <form className='abcde' method="post" action='/api/mailer'>
      <label for='name'>Nombre</label>
      <input type="text" name="name" id="name" />
      <label for='email'>Mail</label>
      <input type="email" name="email" id="email" /> 
      <label for='msg'>Mensaje</label>
      <input type="text" name="msg" id="msg" />
      <button type="submit">Enviar</button>
    </form>
  )
}