<script>
    export let streamName;
    export let the_streaming_data;
</script>

{#if streamName === 'apple'}
    <a href="{streamName.result.streamingInfo.us.link}"></a>
{/if}