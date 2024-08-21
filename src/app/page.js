import TodoItem from "@/components/TodoItem";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <form className="flex items-start flex-col gap-2 w-[80%] mt-24 px-2 mx-auto">
        <input 
          type="text"
          className="px-3 py-2 border-2 w-full"/>
        <textarea
          className="px-3 py-2 border-2 w-full"></textarea>
        <button
          className="bg-orange-600 py-3 px-11 text-white rounded-xl">
            Add Todo</button>
      </form>
  
      <div class="relative overflow-x-auto mt-16 w-[80%] mx-auto">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                      <th scope="col" class="px-6 py-3">
                          ID
                      </th>
                      <th scope="col" class="px-6 py-3">
                          Title
                      </th>
                      <th scope="col" class="px-6 py-3">
                          Description
                      </th>
                      <th scope="col" class="px-6 py-3">
                          Status
                      </th>
                      <th scope="col" class="px-6 py-3">
                          Actions
                      </th>
                  </tr>
              </thead>
              <tbody>
                  <TodoItem/>
                  <TodoItem/>
                  <TodoItem/>
                  <TodoItem/>
                  <TodoItem/>
              </tbody>
          </table>
      </div>
    </div>
  );
}
