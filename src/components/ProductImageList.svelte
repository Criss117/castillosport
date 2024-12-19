<script lang="ts">
  import { cn } from "@/lib";

  interface Props {
    title: string;
    images: string[];
  }

  let { images, title }: Props = $props();

  let currentImage = $state(images[0]);

  const onMouseEnter = (index: number) => {
    currentImage = images[index];
  };
</script>

<section
  class="flex flex-col-reverse lg:flex-row"
  id="image-container"
  aria-label="Imagen principal"
>
  <div
    class="w-full lg:w-1/5 flex flex-row lg:flex-col gap-y-5 gap-x-10 items-center justify-center mb-20"
  >
    {#each images as image}
      <picture
        role="button"
        tabindex={images.indexOf(image)}
        class={cn(
          "w-16 cursor-pointer border-2 rounded-lg",
          currentImage === image && "border-primary"
        )}
        onmouseenter={() => onMouseEnter(images.indexOf(image))}
      >
        <source src={image} type="image/jpg" />
        <img src={image} alt={title} class="w-16 p-2" />
      </picture>
    {/each}
  </div>

  <div class="w-full lg:w-4/5 flex items-center justify-center">
    <img
      src={currentImage}
      alt={title}
      class="w-[400px] h-[600px] object-contain mx-auto"
    />
  </div>
</section>
