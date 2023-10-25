<script lang="ts">
  import { slide } from "svelte/transition";

  export let isOpened = false;
  export let question: string, answer: string;

  const toggleFaq = () => {
    isOpened = !isOpened;
  };
</script>

<div>
  <div class="bg-whiteSmoke py-4 px-7 rounded-3xl mb-3">
    <button
      class="text-xl font-bold tracking-tight flex justify-between items-center w-full"
      on:click={toggleFaq}
    >
      <div>{question}</div>
      <img
        src="/images/chevron.svg"
        alt="Chevron"
        class="transition-transform"
        class:-rotate-180={isOpened}
      />
    </button>
    {#if isOpened}
      <div transition:slide>{answer}</div>
    {/if}
  </div>
</div>
