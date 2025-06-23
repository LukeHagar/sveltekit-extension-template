<script lang='ts'>

	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<!-- App Shell -->
<AppShell>
	{#snippet header()}
	
			<!-- App Bar -->
			<AppBar>
				{#snippet lead()}
					
						<strong class="text-xl uppercase">Skeleton</strong>
					
					{/snippet}
				{#snippet trail()}
					
						<a
							class="btn btn-sm variant-ghost-surface"
							href="https://discord.gg/EXqV7W8MtY"
							target="_blank"
							rel="noreferrer"
						>
							Discord
						</a>
						<a
							class="btn btn-sm variant-ghost-surface"
							href="https://twitter.com/SkeletonUI"
							target="_blank"
							rel="noreferrer"
						>
							Twitter
						</a>
						<a
							class="btn btn-sm variant-ghost-surface"
							href="https://github.com/skeletonlabs/skeleton"
							target="_blank"
							rel="noreferrer"
						>
							GitHub
						</a>
					
					{/snippet}
			</AppBar>
		
	{/snippet}
	<!-- Page Route Content -->
	{@render children?.()}
</AppShell>
