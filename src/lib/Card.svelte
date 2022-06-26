<script lang="ts">
    export let iconPaths:string[];
    export let title: String;
    export let comingSoon: Boolean = false;
    export let description: String;
    export let link: string = "";
</script>

{ #if comingSoon }
    <a href="/">
        <div class="flex mb-4 bg-white p-4 rounded-lg content-center shadow-sm hover:scale-105 hover:shadow-md transition ease-in-out border-2 border-yellow-400 w-[500px]">
            <div class="self-center">
                <svg class="flex-none w-20 fill-white rounded-lg p-4 bg-sky-300 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    {#each iconPaths as icon}
                        <path d={icon}/>
                    {/each}
                </svg>
            </div>
            <div class="ml-2 p-3 flex-initial">
                <h2 class="text-slate-900 font-bold font-subtitle text-lg capitalize">{title}</h2>
                <p class="font-medium tracking-wider font-body text-sm text-slate-400 mb-2">{description}</p>
                <span class="px-2 py-1 bg-yellow-200 font-semibold text-yellow-900 text-xs rounded-2xl">Coming Soon</span> 
            </div>
        </div>
    </a>
{/if }
{ #if !comingSoon }
    <a href={link}>
        <div class="flex mb-4 bg-white p-4 rounded-lg content-center shadow-sm hover:scale-105 hover:shadow-md transition ease-in-out border-2 border-slate-200 w-[500px]">
            <div class="self-center">
                <svg class="flex-none w-20 fill-white rounded-lg p-4 bg-sky-300 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    {#each iconPaths as icon}
                        <path d={icon}/>
                    {/each}
                </svg>
            </div>
            <div class="ml-2 p-3 flex-initial">
                <h2 class="text-slate-900 font-bold font-subtitle text-lg capitalize">{title}</h2>
                <p class="font-medium tracking-wider font-body text-sm text-slate-400 mb-2">{description}</p>
            </div>
        </div>
    </a>
{ /if }