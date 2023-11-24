from flask import Flask, render_template, redirect, request, flash
from flask_mail import Mail, Message


app = Flask(__name__)
app.secret_key = '051518'


mail_confg = {
    "MAIL_SERVER": 'smtp.gmail.com',
    "MAIL_PORT": 465,
    "MAIL_USE_TLS": False,
    "MAIL_USE_SSL": True,
    "MAIL_USERNAME": '',
    "MAIL_PASSWORD": '',
}

app.config.update(mail_confg)
mail = Mail(app)

class Contato:
    def __init__(self,nome, email, mensagem):
        self.nome = nome
        self.email = email
        self.mensagem = mensagem





@app.route('/')
def index():
    return render_template('index.html')


@app.route('/send', methods=['GET', 'POST'])
def send():
    if request.method == 'POST':
        formContato = Contato(
            request.form['nome'],
            request.form['email'],
            request.form['mensagem']
        )
        
        msg = Message(
            subject= f'Você recebeu uma mensagem de {formContato.nome}, sobre o Portifólio',
            sender= app.config.get('MAIL_USERNAME'),
            recipients= ['gabriel.silva_dev@outlook.com', 'obiel_joker@outlook.com', 'gahel.god.2018@gmail.com'],
            body= f'''
            
            Nome: {formContato.nome}
            E-mail: {formContato.email}
            
            Mensagem:
            
            {formContato.mensagem}
            
            '''
        )
        
        
        mail.send(msg)
        flash('Mensagem enviada com sucesso!!')
       

    
    return redirect('/')


   
        
if __name__ == '__main__':
    app.run(debug=True)
    
