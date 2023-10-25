<script lang="ts">
  import { onMount } from "svelte";
  import kwesforms from "kwesforms";

  onMount(() => {
    kwesforms.init();
  });
</script>

<form
  method="post"
  class="kwes-form border-1 border-lightGray rounded-xl p-2 flex items-center"
  action="https://kwesforms.com/api/foreign/forms/JMJQ1kL4oW8YKEgwpoIC"
>
  <input
    type="email"
    name="email"
    placeholder="Your Email Address"
    class="w-full pl-4 text-lg font-bold focus:outline-none"
    rules="required"
  />
  <button class="button primary whitespace-nowrap" type="submit"
    >Send me the Template</button
  >
</form>
