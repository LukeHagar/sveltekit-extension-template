<script lang="ts">
	// Most of your app wide CSS should be put in this file
	import '../app.css';

	let { children } = $props();
</script>

<!-- App Shell -->
<div>
	<div class="flex flex-row justify-between p-2">
		<strong class="text-xl uppercase">Skeleton</strong>

		<div>
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
		</div>
	</div>

	<!-- Page Route Content -->
	<div>
		{@render children?.()}
	</div>
</div>
