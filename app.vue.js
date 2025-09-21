const { createApp } = Vue

createApp({
  data() {
    return {
      name: "Ejan Shakya",
      intro: "This is a brief introduction about Ejan Shakya. Welcome to my portfolio!"
    }
  },
  template: `
    <header>
      <h1>Welcome to {{ name }}'s Portfolio</h1>
    </header>
    <main>
      <section>
        <h2>About Me</h2>
        <p>{{ intro }}</p>
      </section>
    </main>
  `
}).mount('#app')