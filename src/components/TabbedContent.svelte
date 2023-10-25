<script lang="ts">
  import { fade } from "svelte/transition";

  let currentTab = "projectAssets";

  const tabOptions = [
    "projectAssets",
    "deliverables",
    "backlog",
    "meetingNotes",
  ];

  // set a timer to change the tab every 10 seconds
  let timer = setInterval(() => {
    const currentIndex = tabOptions.indexOf(currentTab);
    const nextIndex =
      currentIndex + 1 === tabOptions.length ? 0 : currentIndex + 1;
    currentTab = tabOptions[nextIndex];
  }, 10000);
</script>

<div class="grid grid-cols-4 gap-x-5 gap-y-7 tabbed-content">
  <button
    class="tab"
    class:bg-whiteSmoke={currentTab !== "projectAssets"}
    class:bg-transparent={currentTab === "projectAssets"}
    on:click={() => (currentTab = "projectAssets")}
  >
    <img
      src="/images/project-assets.png"
      srcset="/images/project-assets@2x.png 2x, /images/project-assets.png"
      alt="Project Assets"
      class="absolute mix-blend-multiply -top-2"
    />
    <h4>Project Assets</h4>
  </button>
  <button
    class="tab"
    class:bg-whiteSmoke={currentTab !== "deliverables"}
    class:bg-transparent={currentTab === "deliverables"}
    on:click={() => (currentTab = "deliverables")}
  >
    <img
      src="/images/deliverables.png"
      srcset="/images/deliverables@2x.png 2x, /images/deliverables.png"
      alt="Deliverables"
      class="absolute mix-blend-multiply -top-2"
    />
    <h4>Deliverables</h4>
  </button>
  <button
    class="tab"
    class:bg-whiteSmoke={currentTab !== "backlog"}
    class:bg-transparent={currentTab === "backlog"}
    on:click={() => (currentTab = "backlog")}
  >
    <img
      src="/images/backlog.png"
      srcset="/images/backlog@2x.png 2x, /images/backlog.png"
      alt="Backlog"
      class="absolute mix-blend-multiply top-10"
    />
    <h4>Backlog</h4>
  </button>
  <button
    class="tab"
    class:bg-whiteSmoke={currentTab !== "meetingNotes"}
    class:bg-transparent={currentTab === "meetingNotes"}
    on:click={() => (currentTab = "meetingNotes")}
  >
    <img
      class="absolute mix-blend-multiply -top-2"
      src="/images/meeting-notes.png"
      srcset="/images/meeting-notes@2x.png 2x, /images/meeting-notes.png"
      alt=""
    />
    <h4>Meeting Notes</h4>
  </button>

  <!-- project assets -->
  {#if currentTab === "projectAssets"}
    <div class="content-box">
      <div class="content">
        <div class="heading">Project Assets</div>
        <div class="flex-1">
          <p>
            This is something brilliant and copy that I haven’t written yet. I
            hate writing copy. I wish it would write itself. Thank goodness for
            AI and ChatGPT and Notion AI and Jasper AI and all the AI.
          </p>
        </div>
        <div>
          <a href="#get" class="button primary">Get the Template for Free</a>
        </div>
      </div>
      <img
        src="/images/placeholder--screenshot--half.png"
        alt=""
        class="rounded-tr-3xl rounded-br-3xl"
      />
    </div>
  {/if}

  <!-- deliverables -->
  {#if currentTab === "deliverables"}
    <div class="content-box">
      <div class="content">
        <div class="heading">Deliverables</div>
        <div class="flex-1">
          <p>
            This is something brilliant and copy that I haven’t written yet. I
            hate writing copy. I wish it would write itself. Thank goodness for
            AI and ChatGPT and Notion AI and Jasper AI and all the AI.
          </p>
        </div>
        <div>
          <a href="#get" class="button primary">Get the Template for Free</a>
        </div>
      </div>
      <img
        src="/images/placeholder--screenshot--half.png"
        alt=""
        class="rounded-tr-3xl rounded-br-3xl"
      />
    </div>
  {/if}

  <!-- backlog -->
  {#if currentTab === "backlog"}
    <div class="content-box">
      <div class="content">
        <div class="heading">Backlog</div>
        <div class="flex-1">
          <p>
            This is something brilliant and copy that I haven’t written yet. I
            hate writing copy. I wish it would write itself. Thank goodness for
            AI and ChatGPT and Notion AI and Jasper AI and all the AI.
          </p>
        </div>
        <div>
          <a href="#get" class="button primary">Get the Template for Free</a>
        </div>
      </div>
      <img
        src="/images/placeholder--screenshot--half.png"
        alt=""
        class="rounded-tr-3xl rounded-br-3xl"
      />
    </div>
  {/if}

  <!-- meeting notes -->
  {#if currentTab === "meetingNotes"}
    <div class="content-box">
      <div class="content">
        <div class="heading">Meeting Notes</div>
        <div class="flex-1">
          <p>
            This is something brilliant and copy that I haven’t written yet. I
            hate writing copy. I wish it would write itself. Thank goodness for
            AI and ChatGPT and Notion AI and Jasper AI and all the AI.
          </p>
        </div>
        <div>
          <a href="#get" class="button primary">Get the Template for Free</a>
        </div>
      </div>
      <img
        src="/images/placeholder--screenshot--half.png"
        alt=""
        class="rounded-tr-3xl rounded-br-3xl"
      />
    </div>
  {/if}
</div>
