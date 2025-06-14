<template>
	<div class="bg-white rounded-sm overflow-hidden border border-gray-200 transition-transform duration-300 hover:-translate-y-2 h-full">
		<!-- Image Container -->
		<div class="relative h-64 overflow-hidden group">
			<img :src="data.image" :alt="data.titre" class="w-full z-30 relative h-full object-cover transition-transform duration-500 group-hover:scale-110" />

			<!-- Overlay Link -->
			<a :href="data.lien" class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
				<span class="w-12 h-12 bg-conult-base rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
					<i class="fas fa-plus text-white"></i>
				</span>
			</a>

			<!-- Date Badge -->
			<div class="absolute top-4 left-4 bg-conult-base text-white px-4 py-2 rounded-sm">
				<p class="text-sm font-medium">{{ data.date }}</p>
			</div>
		</div>

		<!-- Content -->
		<div class="p-6 h-[250px] flex flex-col justify-between">
			<!-- Meta Info
       
      <ul class="flex flex-wrap gap-4 text-sm text-conult-gray mb-4">
        <li>
          <a :href="data.lien" class="hover:text-conult-base transition-colors">
            <i class="far fa-user-circle mr-1"></i> Par {{ data.auteur }}
          </a>
        </li>
        <li>
          <a :href="data.lien" class="hover:text-conult-base transition-colors">
            <i class="far fa-calendar-alt mr-1"></i> 
            Publié le {{ data.date }}
          </a>
        </li>
      </ul>
      -->

			<div>
				<!-- Title -->
				<h3 class="text-xl font-conult font-bold text-conult-black mb-3 hover:text-conult-base transition-colors">
					<a :href="data.lien">{{ data.titre }}</a>
				</h3>
				<p class="text-conult-gray mb-6 line-clamp-2">{{ data.description }}</p>
			</div>

			<div>
				<!-- Description -->

				<!-- Bottom Links -->
				<div class="flex items-center justify-between pt-4 border-t border-gray-100">
					<a :href="data.lien" class="text-conult-base font-medium hover:text-conult-black transition-colors"> Lire plus </a>
					<a :href="data.lien" class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-conult-base hover:text-white transition-colors">
						<i class="fas fa-arrow-right"></i>
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	interface CardData {
		id: number;
		image: string;
		date: string;
		auteur: string;
		commentaires: number;
		titre: string;
		description: string;
		lien: string;
	}

	defineProps<{
		data: CardData;
	}>();
</script>
