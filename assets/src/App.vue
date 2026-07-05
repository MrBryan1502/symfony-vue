<script setup lang="ts">
  import { ref } from 'vue';

  const counter = ref(0);

  function increment() {
    counter.value++;
  }

  function decrement() {
    counter.value--;
  }

  function reset() {
    counter.value = 0;
  }
</script>

<template>
  <div class="app">
    <header class="hero">
      <div class="hero-bg"></div>
      <div class="hero-content">
        <h1 class="title">
          <span class="title-symfony">Symfony</span>
          <span class="title-plus">+</span>
          <span class="title-vue">Vue</span>
        </h1>

        <p class="subtitle">
          Plantilla moderna para aplicaciones web robustas y reactivas
        </p>

        <div class="tech-tags">
          <span class="tag tag-php">PHP 8</span>
          <span class="tag tag-symfony">Symfony 7</span>
          <span class="tag tag-vue">Vue 3</span>
          <span class="tag tag-ts">TypeScript</span>
        </div>
      </div>
    </header>

    <main class="main">
      <section class="card counter-card">
        <h2 class="card-title">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
            <line x1="8" y1="21" x2="16" y2="21" />
            <line x1="12" y1="17" x2="12" y2="21" />
          </svg>
          Contador de ejemplo
        </h2>

        <div class="counter-display">
          <span class="counter-value">{{ counter }}</span>
        </div>

        <div class="counter-actions">
          <button class="btn btn-increment" @click="increment">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.5"
              stroke-linecap="round"
            >
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            Incrementar
          </button>
          <button class="btn btn-decrement" @click="decrement">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.5"
              stroke-linecap="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            Decrementar
          </button>
          <button class="btn btn-reset" @click="reset">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polyline points="1 4 1 10 7 10" />
              <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
            </svg>
            Reset
          </button>
        </div>
      </section>

      <section class="cards-grid">
        <div class="card info-card">
          <div class="card-icon card-icon-1">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          </div>
          <h3>Backend robusto</h3>
          <p>
            Symfony 7 con PHP 8, Doctrine, y las mejores prácticas del
            ecosistema.
          </p>
        </div>

        <div class="card info-card">
          <div class="card-icon card-icon-2">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polygon
                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
              />
            </svg>
          </div>
          <h3>Frontend reactivo</h3>
          <p>
            Vue 3 con Composition API, TypeScript y Vite para máxima velocidad.
          </p>
        </div>

        <div class="card info-card">
          <div class="card-icon card-icon-3">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
          </div>
          <h3>Listo para producción</h3>
          <p>
            Integración completa, hot reload, y build optimizado desde el
            inicio.
          </p>
        </div>
      </section>
    </main>

    <footer class="footer">
      <p>
        Hecho con <span class="heart">&hearts;</span> para desarrolladores
        Symfony & Vue
      </p>
    </footer>
  </div>
</template>

<style scoped>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .app {
    font-family:
      'Inter',
      'Segoe UI',
      system-ui,
      -apple-system,
      sans-serif;
    min-height: 100vh;
    background: #0f0f1a;
    color: #e0e0e0;
    overflow-x: hidden;
  }

  /* ===== HERO ===== */
  .hero {
    position: relative;
    min-height: 85vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  .hero-bg {
    position: absolute;
    inset: 0;
    background:
      radial-gradient(
        ellipse 80% 60% at 50% -10%,
        rgba(74, 144, 226, 0.15) 0%,
        transparent 60%
      ),
      radial-gradient(
        ellipse 60% 50% at 80% 80%,
        rgba(66, 184, 131, 0.1) 0%,
        transparent 50%
      ),
      radial-gradient(
        ellipse 50% 40% at 20% 90%,
        rgba(255, 255, 255, 0.03) 0%,
        transparent 50%
      );
  }

  .hero-content {
    position: relative;
    z-index: 1;
    text-align: center;
    padding: 2rem;
    max-width: 800px;
  }

  /* Logos */
  .logos {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    margin-bottom: 2.5rem;
  }

  .logo-wrapper {
    width: 140px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .logo-svg {
    width: 100%;
    height: 100%;
  }

  .logo-plus {
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.5;
  }

  /* Title */
  .title {
    font-size: clamp(2.5rem, 6vw, 4.5rem);
    font-weight: 800;
    letter-spacing: -0.03em;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.4em;
    flex-wrap: wrap;
  }

  .title-symfony {
    background: linear-gradient(135deg, #4a90e2, #7b5ea7);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .title-plus {
    color: rgba(255, 255, 255, 0.3);
    font-weight: 300;
  }

  .title-vue {
    background: linear-gradient(135deg, #42b883, #35a372);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  /* Subtitle */
  .subtitle {
    font-size: clamp(1rem, 2vw, 1.25rem);
    color: rgba(255, 255, 255, 0.5);
    margin-bottom: 2rem;
    font-weight: 400;
  }

  /* Tech tags */
  .tech-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem;
    justify-content: center;
  }

  .tag {
    padding: 0.4rem 1rem;
    border-radius: 999px;
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 0.02em;
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(255, 255, 255, 0.04);
    color: rgba(255, 255, 255, 0.7);
    transition: all 0.2s;
  }

  .tag:hover {
    transform: translateY(-1px);
    border-color: rgba(255, 255, 255, 0.25);
    background: rgba(255, 255, 255, 0.08);
  }

  .tag-symfony {
    border-color: rgba(74, 144, 226, 0.3);
    color: #7db8f0;
  }
  .tag-vue {
    border-color: rgba(66, 184, 131, 0.3);
    color: #42b883;
  }
  .tag-php {
    border-color: rgba(156, 132, 207, 0.3);
    color: #9c84cf;
  }
  .tag-ts {
    border-color: rgba(49, 120, 198, 0.3);
    color: #3178c6;
  }

  /* ===== MAIN ===== */
  .main {
    max-width: 900px;
    margin: 0 auto;
    padding: 0 1.5rem 4rem;
  }

  /* Card base */
  .card {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 1.25rem;
    padding: 2rem;
    backdrop-filter: blur(12px);
    transition: all 0.3s ease;
  }

  .card:hover {
    border-color: rgba(255, 255, 255, 0.12);
    background: rgba(255, 255, 255, 0.05);
  }

  /* Counter card */
  .counter-card {
    text-align: center;
    margin-bottom: 2.5rem;
  }

  .card-title {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    font-size: 1.1rem;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.6);
    margin-bottom: 1.5rem;
  }

  .counter-display {
    margin: 2rem 0;
  }

  .counter-value {
    font-size: clamp(4rem, 10vw, 7rem);
    font-weight: 800;
    letter-spacing: -0.04em;
    background: linear-gradient(135deg, #4a90e2, #42b883);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    line-height: 1;
  }

  .counter-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    justify-content: center;
  }

  /* Buttons */
  .btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.5rem;
    border-radius: 0.75rem;
    border: none;
    font-size: 0.9rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
    color: white;
  }

  .btn:active {
    transform: scale(0.96);
  }

  .btn-increment {
    background: linear-gradient(135deg, #42b883, #35a372);
    box-shadow: 0 4px 15px rgba(66, 184, 131, 0.25);
  }

  .btn-increment:hover {
    box-shadow: 0 6px 25px rgba(66, 184, 131, 0.4);
    transform: translateY(-2px);
  }

  .btn-decrement {
    background: linear-gradient(135deg, #e74c3c, #c0392b);
    box-shadow: 0 4px 15px rgba(231, 76, 60, 0.25);
  }

  .btn-decrement:hover {
    box-shadow: 0 6px 25px rgba(231, 76, 60, 0.4);
    transform: translateY(-2px);
  }

  .btn-reset {
    background: rgba(255, 255, 255, 0.08);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  }

  .btn-reset:hover {
    background: rgba(255, 255, 255, 0.14);
    transform: translateY(-2px);
  }

  /* ===== CARDS GRID ===== */
  .cards-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 1.5rem;
  }

  .info-card {
    text-align: center;
  }

  .card-icon {
    width: 56px;
    height: 56px;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.25rem;
  }

  .card-icon-1 {
    background: linear-gradient(
      135deg,
      rgba(74, 144, 226, 0.15),
      rgba(74, 144, 226, 0.05)
    );
    color: #4a90e2;
  }
  .card-icon-2 {
    background: linear-gradient(
      135deg,
      rgba(66, 184, 131, 0.15),
      rgba(66, 184, 131, 0.05)
    );
    color: #42b883;
  }
  .card-icon-3 {
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0.03)
    );
    color: rgba(255, 255, 255, 0.7);
  }

  .info-card h3 {
    font-size: 1.05rem;
    font-weight: 700;
    margin-bottom: 0.6rem;
    color: rgba(255, 255, 255, 0.85);
  }

  .info-card p {
    font-size: 0.9rem;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.45);
  }

  /* ===== FOOTER ===== */
  .footer {
    text-align: center;
    padding: 2rem 1.5rem;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
    color: rgba(255, 255, 255, 0.3);
    font-size: 0.85rem;
  }

  .heart {
    color: #e74c3c;
    display: inline-block;
    animation: heartbeat 1.4s ease-in-out infinite;
  }

  @keyframes heartbeat {
    0%,
    100% {
      transform: scale(1);
    }
    25% {
      transform: scale(1.15);
    }
    35% {
      transform: scale(1);
    }
    45% {
      transform: scale(1.1);
    }
    55% {
      transform: scale(1);
    }
  }
</style>
