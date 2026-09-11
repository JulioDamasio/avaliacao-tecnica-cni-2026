# Formulário de Solicitação de Compra
**Avaliação Técnica – Automação de Processos – CNI – Setembro/2026**
**Autor:** Júlio César Damásio dos Santos

---

## Arquivos entregues

| Arquivo | Descrição |
|---|---|
| `FormularioCompra.html` | Página com o formulário de compra |
| `Scripts.js` | Lógica JavaScript separada |
| `fluxo_bpmn.pdf` | Diagrama BPMN do processo |

---

## Como executar

1. Coloque `FormularioCompra.html` e `Scripts.js` na **mesma pasta**
2. Abra `FormularioCompra.html` no navegador (Chrome ou Edge)
3. Preencha os campos e clique em **Comprar**

Não é necessário servidor web — funciona diretamente pelo navegador.

---

## Parte 2 – JavaScript

**Campos do formulário:** Nome, E-mail, Produto, Quantidade e Prioridade

**Validação:** feita pelo atributo `required` do HTML (validação nativa do navegador)

**Fluxo ao clicar em Comprar:**
1. O JavaScript intercepta o envio do formulário via `addEventListener("submit")`
2. `evento.preventDefault()` impede a página de recarregar
3. Os valores são coletados com `document.getElementById().value`
4. A função `exibirResumo()` cria elementos com `createElement` e insere os dados com `textContent`
5. O resumo aparece abaixo do formulário sem recarregar a página

**Obs. de segurança:** foi utilizado `textContent` em vez de `innerHTML` para evitar vulnerabilidade XSS (injeção de código via campos de texto).

---

## Parte 1 – BPMN

O diagrama (`fluxo_bpmn.pdf`) modela o processo em **duas raias (Swim Lanes)**:

**Raia: Solicitante**
- Identifica a necessidade → Preenche o formulário → Clica em "Comprar"
- Gateway verifica se os campos foram preenchidos:
  - **Não** → retorna ao formulário para correção
  - **Sim** → o sistema intercepta e processa
- Visualiza o resumo gerado → Solicitação registrada

**Raia: Sistema (JavaScript / HTML)**
- Intercepta o evento de submit (`addEventListener`)
- Coleta os valores e gera o resumo no DOM da página

**Elementos BPMN utilizados:**
- Evento de Início
- Evento Intermediário (captura do submit)
- Tarefas (UserTask e ServiceTask)
- Gateway Exclusivo – XOR (campos preenchidos?)
- Raias (Solicitante / Sistema)
- Evento de Fim
