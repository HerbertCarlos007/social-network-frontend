<script setup>

</script>

<template>
    <div class="flex min-h-screen w-full items-center justify-center bg-[#1a1a1a] p-4 text-white md:p-8">

  <div class="w-full max-w-3xl rounded-lg border border-[#2a2a2a] bg-[#1a1a1a] shadow-lg">
    <div class="border-b border-[#2a2a2a] p-4">
      <h2 class="text-xl font-bold">Amigos</h2>
      <p class="text-gray-400">Gerencie seus pedidos de amizade e encontre novas pessoas.</p>
    </div>
    <div class="p-4">
      <div class="w-full">
        <div class="grid w-full grid-cols-3 rounded-lg bg-[#2a2a2a] p-1">
          <button class="rounded-md bg-blue-600 px-4 py-2 text-white">Pedidos de Amizade</button>
          <button class="rounded-md px-4 py-2 text-white hover:bg-[#3a3a3a]">Minhas Amizades</button>
          <button class="rounded-md px-4 py-2 text-white hover:bg-[#3a3a3a]">Pessoas para Adicionar</button>
        </div>
        <div class="mt-4">
          <div class="h-[calc(100vh-250px)] overflow-y-auto pr-4">
            <div class="space-y-4">
              <div class="flex items-center justify-between rounded-lg border border-[#2a2a2a] bg-[#2a2a2a] p-3">
                <div class="flex items-center gap-3">
                  <div class="h-10 w-10 overflow-hidden rounded-full">
                    <img src="" alt="User Avatar" class="h-full w-full object-cover" />
                  </div>
                  <div>
                    <p class="font-semibold">João Silva</p>
                    <p class="text-sm text-gray-400">Enviou um pedido de amizade</p>
                  </div>
                </div>
                <div class="flex gap-2">
                  <button class="rounded-lg bg-blue-600 px-3 py-1.5 text-white hover:bg-blue-700">Aceitar</button>
                  <button
                    class="rounded-lg border border-gray-500 bg-transparent px-3 py-1.5 text-gray-300 hover:bg-gray-700"
                  >
                    Recusar
                  </button>
                </div>
              </div>
              <div class="flex items-center justify-between rounded-lg border border-[#2a2a2a] bg-[#2a2a2a] p-3">
                <div class="flex items-center gap-3">
                  <div class="h-10 w-10 overflow-hidden rounded-full">
                    <img src="" alt="User Avatar" class="h-full w-full object-cover" />
                  </div>
                  <div>
                    <p class="font-semibold">Maria Souza</p>
                    <p class="text-sm text-gray-400">Enviou um pedido de amizade</p>
                  </div>
                </div>
                <div class="flex gap-2">
                  <button class="rounded-lg bg-blue-600 px-3 py-1.5 text-white hover:bg-blue-700">Aceitar</button>
                  <button
                    class="rounded-lg border border-gray-500 bg-transparent px-3 py-1.5 text-gray-300 hover:bg-gray-700"
                  >
                    Recusar
                  </button>
                </div>
              </div>
        
              <div class="flex items-center justify-between rounded-lg border border-[#2a2a2a] bg-[#2a2a2a] p-3">
                <div class="flex items-center gap-3">
                  <div class="h-10 w-10 overflow-hidden rounded-full">
                    <img src="" alt="User Avatar" class="h-full w-full object-cover" />
                  </div>
                  <div>
                    <p class="font-semibold">Ana Santos</p>
                    <p class="text-sm text-gray-400">Amigo desde 2023</p>
                  </div>
                </div>
                <button
                  class="rounded-lg border border-gray-500 bg-transparent px-3 py-1.5 text-gray-300 hover:bg-gray-700"
                >
                  Remover
                </button>
              </div>
              <div class="flex items-center justify-between rounded-lg border border-[#2a2a2a] bg-[#2a2a2a] p-3">
                <div class="flex items-center gap-3">
                  <div class="h-10 w-10 overflow-hidden rounded-full">
                    <img src="" alt="User Avatar" class="h-full w-full object-cover" />
                  </div>
                  <div>
                    <p class="font-semibold">Pedro Costa</p>
                    <p class="text-sm text-gray-400">Amigo desde 2022</p>
                  </div>
                </div>
                <button
                  class="rounded-lg border border-gray-500 bg-transparent px-3 py-1.5 text-gray-300 hover:bg-gray-700"
                >
                  Remover
                </button>
              </div>
           
              <input
                type="text"
                placeholder="Buscar pessoas..."
                class="mb-4 w-full rounded-lg border border-[#2a2a2a] bg-[#2a2a2a] px-4 py-2 text-white placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500"
              />
          
              <div class="flex items-center justify-between rounded-lg border border-[#2a2a2a] bg-[#2a2a2a] p-3">
                <div class="flex items-center gap-3">
                  <div class="h-10 w-10 overflow-hidden rounded-full">
                    <img src="" alt="User Avatar" class="h-full w-full object-cover" />
                  </div>
                  <div>
                    <p class="font-semibold">Fernanda Gomes</p>
                    <p class="text-sm text-gray-400">Sugestão de amigo</p>
                  </div>
                </div>
                <button class="rounded-lg bg-blue-600 px-3 py-1.5 text-white hover:bg-blue-700">Adicionar</button>
              </div>
              <div class="flex items-center justify-between rounded-lg border border-[#2a2a2a] bg-[#2a2a2a] p-3">
                <div class="flex items-center gap-3">
                  <div class="h-10 w-10 overflow-hidden rounded-full">
                    <img src="" alt="User Avatar" class="h-full w-full object-cover" />
                  </div>
                  <div>
                    <p class="font-semibold">Ricardo Carvalho</p>
                    <p class="text-sm text-gray-400">Sugestão de amigo</p>
                  </div>
                </div>
                <button class="rounded-lg bg-blue-600 px-3 py-1.5 text-white hover:bg-blue-700">Adicionar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
