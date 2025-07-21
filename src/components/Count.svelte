<script>
  import { onMount } from 'svelte';

  // Define tu fecha final aquí. Formato: AÑO-MES-DÍA T HORA
  const fechaFinal = new Date('2025-09-26T23:59:59');

  // Variables que se actualizarán y se mostrarán en el HTML
  let dias = 0;
  let horas = 0;
  let minutos = 0;
  let segundos = 0;
  let completado = false;

  function actualizarContador() {
    const ahora = new Date();
    const diff = fechaFinal.getTime() - ahora.getTime();

    if (diff <= 0) {
      completado = true;
      return; // Detiene el contador
    }

    dias = Math.floor(diff / (1000 * 60 * 60 * 24));
    horas = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutos = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    segundos = Math.floor((diff % (1000 * 60)) / 1000);
  }

  // onMount asegura que este código solo se ejecute en el navegador
  onMount(() => {
    // Llama a la función una vez al inicio para evitar el retraso de 1 segundo
    actualizarContador();

    // Actualiza el contador cada segundo
    const intervalo = setInterval(() => {
      actualizarContador();
      if (completado) {
        clearInterval(intervalo);
      }
    }, 1000);

    // Limpia el intervalo cuando el componente se destruye (buena práctica)
    return () => clearInterval(intervalo);
  });
</script>

<!-- HTML del componente -->
{#if completado}
  <!-- Mensaje que se muestra cuando el contador termina -->
  <div class="hoy text-2xl font-bold">¡Hoy es el gran día!</div>
{:else}
  <!-- El contador activo. Puedes aplicar tus clases de Tailwind aquí -->
  <div class="flex justify-center items-center gap-4 sm:gap-8 text-center">
    <div class="time">
      <span class="date text-4xl sm:text-6xl font-bold">{dias}</span>
      <span class="text block text-sm sm:text-base">Días</span>
    </div>
    <div class="time">
      <span class="date text-4xl sm:text-6xl font-bold">{horas}</span>
      <span class="text block text-sm sm:text-base">Horas</span>
    </div>
    <div class="time">
      <span class="date text-4xl sm:text-6xl font-bold">{minutos}</span>
      <span class="text block text-sm sm:text-base">Minutos</span>
    </div>
    <div class="time">
      <span class="date text-4xl sm:text-6xl font-bold">{segundos}</span>
      <span class="text block text-sm sm:text-base">Segundos</span>
    </div>
  </div>
{/if}