import HelloWorldService from '@/services/helloWorldService'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', async () => {
    const mensagemObj = await HelloWorldService.logarUmaMensagem();
    expect(mensagemObj.mensagem).toBe("uma mensagem")
  })
})
