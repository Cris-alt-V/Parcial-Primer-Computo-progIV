class PresupuestoForm extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <form id="formPresupuesto">
        <label>Nombre del Cliente:</label>
        <input type="text" id="nombre" required><br><br>

        <label>Tipo de Mantenimiento:</label>
        <select id="tipo" required>
          <option value="">Seleccione...</option>
          <option value="Preventivo">Preventivo</option>
          <option value="Correctivo">Correctivo</option>
          <option value="Instalación">Instalación</option>
        </select><br><br>

        <label>Costo Base ($):</label>
        <input type="number" id="costo" required><br><br>

        <label>Horas de Trabajo:</label>
        <input type="number" id="horas" required><br><br>

        <button type="submit">Calcular Presupuesto</button>
      </form>
      <div id="resultado"></div>
    `;
  }

  connectedCallback() {
    const form = this.shadowRoot.querySelector('#formPresupuesto');
    const resultado = this.shadowRoot.querySelector('#resultado');

    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const nombre = this.shadowRoot.querySelector('#nombre').value.trim();
      const tipo = this.shadowRoot.querySelector('#tipo').value;
      const costoBase = parseFloat(this.shadowRoot.querySelector('#costo').value);
      const horas = parseInt(this.shadowRoot.querySelector('#horas').value);

      if (!nombre || !tipo || isNaN(costoBase) || isNaN(horas)) {
        resultado.innerHTML = "<p style='color:red'>Complete todos los campos correctamente.</p>";
        return;
      }

      const total = costoBase + (horas * 15);

      resultado.innerHTML = `
        <p style="color:green">
          Presupuesto generado:<br>
          Cliente: ${nombre}<br>
          Tipo de mantenimiento: ${tipo}<br>
          Total: $${total.toFixed(2)}
        </p>
      `;
    });
  }
}

customElements.define('presupuesto-form', PresupuestoForm);
