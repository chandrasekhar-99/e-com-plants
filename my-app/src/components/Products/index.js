import React,{useState} from 'react'
import {MagnifyingGlass,Plus,CaretDown} from '@phosphor-icons/react'
import ProductsList from '../ProductsList'
import Pagination from '../Pagination'

import './index.css'

const plantData = [
  {
      "id": 1,
      "title": "Monsterra",
      "price": 299,
      "description": "Indoor Plant, Low maintenance",
      "image": "https://s3-alpha-sig.figma.com/img/5d1d/9008/57a26487b27ba64aecadd2f4d7e83e50?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G1A-3swJ4YwcthBXqQLR~ciyuOmL1IZ7P40M1OLsKF~FiZA34DrWU36boYoYS39-CmQ2643Z76YmysIYXJTyGYJC7gKvauhhtEIvwaFnEh6hX-VZOn6tPtc9zViNZW5xgIRwcOagH7KwRYkrejo4XHzU8cO7qMPAsZab-4~j9jovvBM5g4Ttp9oTJX4iMtc8vEYTH1OY~vQ~FUvl~ABA2hbBHewQ8MqnQ-ihVEwZr9OFGJfsGAh7mWjVdNsUyvSmnaInIqMdOaXI7EJtH6oKjwtKZx5CBodSzI0o~gnW5wzkD8geFmhWKPiZ0eC4gIsnwZ9yi0BAg1M5oReXw8-jKw__",
      "rating": 4.9,
  },
  {
      "id": 2,
      "title": "Monsterra",
      "price": 299,
      "description": "Indoor Plant, Low maintenance",
      "image": "https://s3-alpha-sig.figma.com/img/6dd6/6981/e3d2febe446efa4b8f13ccd187d266f5?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n7jT9n2DM7j~L0LbU5K78ODjnCjgLq~pJN3hkI9LKIWVuP696UDEjHo4TwyefwevvVMCQM-Dhrq9R1WkvyiEy-lJG7v3kwe6dgXxb18ncMGtmP0tSyhyYTw-D3XYbGQ29WLMtZyDLR57mGF4IL~1j1pQlRyoiuC02LYVuKty3U3Dt2SdbGAUFRV6brWKgfjZLvnV-bwIxXHWvXFzrgPuPe0eGCtmkUwvuXRXtJLbUdo1m3FJEqAjCVQaP0nDMz8FbZAdMVFB6W8w0APtXkk5KWDH608VDIuDzhpJMNx~mihSEPj8CgbAIz6ZkTk99aWX2dmQteWm9QKewphON1nOfQ__",
      "rating": 4.9,
  },
  {
      "id": 3,
      "title": "Monsterra",
      "price": 299,
      "description": "Indoor Plant, Low maintenance",
      "image": "https://s3-alpha-sig.figma.com/img/5b18/a5fd/8150f68f85e80b39ed12017b8222dd1a?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aJEMdDt63Ic-AZhILS7rtSPXp~mLctW5OcS-6xQlJzZWv4ojnH8bvAJvZvqhnUj9prGamLSkO43C~YZavmZzx2YhF7Pb30i85Bv46q~529q6O9K-OOyA6tNw1BhEdNEo8vYaKGLQtxcZqjynXVeQgje6ZHcuGPs5EiRAeYjS5SBTJ3cCeHX6pglqDK-D~7~aPUCLUjfIySX82h2a18V~8xTsWXaGd-5zrmSgyOE9IbBjelMqJBQ1TVKkw9BWx1uM5LCXv4NJKM-IUjy3LbvQpVN4JS1CElh5A4JZIEl41DhtoA9XzlXbGnhDZ6urCG2kHuUcjmi9E~1alns-YT7lxA__",
      "rating": 4.9,
  },

  {
      "id": 4,
      "title": "Monsterra",
      "price": 299,
      "description": "Indoor Plant, Low maintenance",
      "image": "https://s3-alpha-sig.figma.com/img/5d1d/9008/57a26487b27ba64aecadd2f4d7e83e50?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G1A-3swJ4YwcthBXqQLR~ciyuOmL1IZ7P40M1OLsKF~FiZA34DrWU36boYoYS39-CmQ2643Z76YmysIYXJTyGYJC7gKvauhhtEIvwaFnEh6hX-VZOn6tPtc9zViNZW5xgIRwcOagH7KwRYkrejo4XHzU8cO7qMPAsZab-4~j9jovvBM5g4Ttp9oTJX4iMtc8vEYTH1OY~vQ~FUvl~ABA2hbBHewQ8MqnQ-ihVEwZr9OFGJfsGAh7mWjVdNsUyvSmnaInIqMdOaXI7EJtH6oKjwtKZx5CBodSzI0o~gnW5wzkD8geFmhWKPiZ0eC4gIsnwZ9yi0BAg1M5oReXw8-jKw__",
      "rating": 4.9,
  },
  {
      "id": 5,
      "title": "Monsterra",
      "price": 299,
      "description": "Indoor Plant, Low maintenance",
      "image": "https://s3-alpha-sig.figma.com/img/6dd6/6981/e3d2febe446efa4b8f13ccd187d266f5?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n7jT9n2DM7j~L0LbU5K78ODjnCjgLq~pJN3hkI9LKIWVuP696UDEjHo4TwyefwevvVMCQM-Dhrq9R1WkvyiEy-lJG7v3kwe6dgXxb18ncMGtmP0tSyhyYTw-D3XYbGQ29WLMtZyDLR57mGF4IL~1j1pQlRyoiuC02LYVuKty3U3Dt2SdbGAUFRV6brWKgfjZLvnV-bwIxXHWvXFzrgPuPe0eGCtmkUwvuXRXtJLbUdo1m3FJEqAjCVQaP0nDMz8FbZAdMVFB6W8w0APtXkk5KWDH608VDIuDzhpJMNx~mihSEPj8CgbAIz6ZkTk99aWX2dmQteWm9QKewphON1nOfQ__",
      "rating": 4.9,
  },
  {
      "id": 6,
      "title": "Monsterra",
      "price": 299,
      "description": "Indoor Plant, Low maintenance",
      "image": "https://s3-alpha-sig.figma.com/img/5b18/a5fd/8150f68f85e80b39ed12017b8222dd1a?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aJEMdDt63Ic-AZhILS7rtSPXp~mLctW5OcS-6xQlJzZWv4ojnH8bvAJvZvqhnUj9prGamLSkO43C~YZavmZzx2YhF7Pb30i85Bv46q~529q6O9K-OOyA6tNw1BhEdNEo8vYaKGLQtxcZqjynXVeQgje6ZHcuGPs5EiRAeYjS5SBTJ3cCeHX6pglqDK-D~7~aPUCLUjfIySX82h2a18V~8xTsWXaGd-5zrmSgyOE9IbBjelMqJBQ1TVKkw9BWx1uM5LCXv4NJKM-IUjy3LbvQpVN4JS1CElh5A4JZIEl41DhtoA9XzlXbGnhDZ6urCG2kHuUcjmi9E~1alns-YT7lxA__",
      "rating": 4.9,
  },
  {
      "id": 7,
      "title": "Monsterra",
      "price": 299,
      "description": "Indoor Plant, Low maintenance",
      "image": "https://s3-alpha-sig.figma.com/img/5d1d/9008/57a26487b27ba64aecadd2f4d7e83e50?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G1A-3swJ4YwcthBXqQLR~ciyuOmL1IZ7P40M1OLsKF~FiZA34DrWU36boYoYS39-CmQ2643Z76YmysIYXJTyGYJC7gKvauhhtEIvwaFnEh6hX-VZOn6tPtc9zViNZW5xgIRwcOagH7KwRYkrejo4XHzU8cO7qMPAsZab-4~j9jovvBM5g4Ttp9oTJX4iMtc8vEYTH1OY~vQ~FUvl~ABA2hbBHewQ8MqnQ-ihVEwZr9OFGJfsGAh7mWjVdNsUyvSmnaInIqMdOaXI7EJtH6oKjwtKZx5CBodSzI0o~gnW5wzkD8geFmhWKPiZ0eC4gIsnwZ9yi0BAg1M5oReXw8-jKw__",
      "rating": 4.9,
  },
  {
      "id": 8,
      "title": "Monsterra",
      "price": 299,
      "description": "Indoor Plant, Low maintenance",
      "image": "https://s3-alpha-sig.figma.com/img/6dd6/6981/e3d2febe446efa4b8f13ccd187d266f5?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n7jT9n2DM7j~L0LbU5K78ODjnCjgLq~pJN3hkI9LKIWVuP696UDEjHo4TwyefwevvVMCQM-Dhrq9R1WkvyiEy-lJG7v3kwe6dgXxb18ncMGtmP0tSyhyYTw-D3XYbGQ29WLMtZyDLR57mGF4IL~1j1pQlRyoiuC02LYVuKty3U3Dt2SdbGAUFRV6brWKgfjZLvnV-bwIxXHWvXFzrgPuPe0eGCtmkUwvuXRXtJLbUdo1m3FJEqAjCVQaP0nDMz8FbZAdMVFB6W8w0APtXkk5KWDH608VDIuDzhpJMNx~mihSEPj8CgbAIz6ZkTk99aWX2dmQteWm9QKewphON1nOfQ__",
      "rating": 4.9,
  },
  {
      "id": 9,
      "title": "Monsterra",
      "price": 299,
      "description": "Indoor Plant, Low maintenance",
      "image": "https://s3-alpha-sig.figma.com/img/5b18/a5fd/8150f68f85e80b39ed12017b8222dd1a?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aJEMdDt63Ic-AZhILS7rtSPXp~mLctW5OcS-6xQlJzZWv4ojnH8bvAJvZvqhnUj9prGamLSkO43C~YZavmZzx2YhF7Pb30i85Bv46q~529q6O9K-OOyA6tNw1BhEdNEo8vYaKGLQtxcZqjynXVeQgje6ZHcuGPs5EiRAeYjS5SBTJ3cCeHX6pglqDK-D~7~aPUCLUjfIySX82h2a18V~8xTsWXaGd-5zrmSgyOE9IbBjelMqJBQ1TVKkw9BWx1uM5LCXv4NJKM-IUjy3LbvQpVN4JS1CElh5A4JZIEl41DhtoA9XzlXbGnhDZ6urCG2kHuUcjmi9E~1alns-YT7lxA__",
      "rating": 4.9,
  },
{
      "id": 10,
      "title": "Monsterra",
      "price": 299,
      "description": "Indoor Plant, Low maintenance",
      "image": "https://s3-alpha-sig.figma.com/img/5d1d/9008/57a26487b27ba64aecadd2f4d7e83e50?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G1A-3swJ4YwcthBXqQLR~ciyuOmL1IZ7P40M1OLsKF~FiZA34DrWU36boYoYS39-CmQ2643Z76YmysIYXJTyGYJC7gKvauhhtEIvwaFnEh6hX-VZOn6tPtc9zViNZW5xgIRwcOagH7KwRYkrejo4XHzU8cO7qMPAsZab-4~j9jovvBM5g4Ttp9oTJX4iMtc8vEYTH1OY~vQ~FUvl~ABA2hbBHewQ8MqnQ-ihVEwZr9OFGJfsGAh7mWjVdNsUyvSmnaInIqMdOaXI7EJtH6oKjwtKZx5CBodSzI0o~gnW5wzkD8geFmhWKPiZ0eC4gIsnwZ9yi0BAg1M5oReXw8-jKw__",
      "rating": 4.9,
  },
  {
      "id": 11,
      "title": "Monsterra",
      "price": 299,
      "description": "Indoor Plant, Low maintenance",
      "image": "https://s3-alpha-sig.figma.com/img/6dd6/6981/e3d2febe446efa4b8f13ccd187d266f5?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n7jT9n2DM7j~L0LbU5K78ODjnCjgLq~pJN3hkI9LKIWVuP696UDEjHo4TwyefwevvVMCQM-Dhrq9R1WkvyiEy-lJG7v3kwe6dgXxb18ncMGtmP0tSyhyYTw-D3XYbGQ29WLMtZyDLR57mGF4IL~1j1pQlRyoiuC02LYVuKty3U3Dt2SdbGAUFRV6brWKgfjZLvnV-bwIxXHWvXFzrgPuPe0eGCtmkUwvuXRXtJLbUdo1m3FJEqAjCVQaP0nDMz8FbZAdMVFB6W8w0APtXkk5KWDH608VDIuDzhpJMNx~mihSEPj8CgbAIz6ZkTk99aWX2dmQteWm9QKewphON1nOfQ__",
      "rating": 4.9,
  },
  {
      "id": 12,
      "title": "Monsterra",
      "price": 299,
      "description": "Indoor Plant, Low maintenance",
      "image": "https://s3-alpha-sig.figma.com/img/5b18/a5fd/8150f68f85e80b39ed12017b8222dd1a?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aJEMdDt63Ic-AZhILS7rtSPXp~mLctW5OcS-6xQlJzZWv4ojnH8bvAJvZvqhnUj9prGamLSkO43C~YZavmZzx2YhF7Pb30i85Bv46q~529q6O9K-OOyA6tNw1BhEdNEo8vYaKGLQtxcZqjynXVeQgje6ZHcuGPs5EiRAeYjS5SBTJ3cCeHX6pglqDK-D~7~aPUCLUjfIySX82h2a18V~8xTsWXaGd-5zrmSgyOE9IbBjelMqJBQ1TVKkw9BWx1uM5LCXv4NJKM-IUjy3LbvQpVN4JS1CElh5A4JZIEl41DhtoA9XzlXbGnhDZ6urCG2kHuUcjmi9E~1alns-YT7lxA__",
      "rating": 4.9,
  },
{
      "id": 13,
      "title": "Monsterra",
      "price": 299,
      "description": "Indoor Plant, Low maintenance",
      "image": "https://s3-alpha-sig.figma.com/img/5d1d/9008/57a26487b27ba64aecadd2f4d7e83e50?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G1A-3swJ4YwcthBXqQLR~ciyuOmL1IZ7P40M1OLsKF~FiZA34DrWU36boYoYS39-CmQ2643Z76YmysIYXJTyGYJC7gKvauhhtEIvwaFnEh6hX-VZOn6tPtc9zViNZW5xgIRwcOagH7KwRYkrejo4XHzU8cO7qMPAsZab-4~j9jovvBM5g4Ttp9oTJX4iMtc8vEYTH1OY~vQ~FUvl~ABA2hbBHewQ8MqnQ-ihVEwZr9OFGJfsGAh7mWjVdNsUyvSmnaInIqMdOaXI7EJtH6oKjwtKZx5CBodSzI0o~gnW5wzkD8geFmhWKPiZ0eC4gIsnwZ9yi0BAg1M5oReXw8-jKw__",
      "rating": 4.9,
  },
  {
      "id": 14,
      "title": "Monsterra",
      "price": 299,
      "description": "Indoor Plant, Low maintenance",
      "image": "https://s3-alpha-sig.figma.com/img/6dd6/6981/e3d2febe446efa4b8f13ccd187d266f5?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n7jT9n2DM7j~L0LbU5K78ODjnCjgLq~pJN3hkI9LKIWVuP696UDEjHo4TwyefwevvVMCQM-Dhrq9R1WkvyiEy-lJG7v3kwe6dgXxb18ncMGtmP0tSyhyYTw-D3XYbGQ29WLMtZyDLR57mGF4IL~1j1pQlRyoiuC02LYVuKty3U3Dt2SdbGAUFRV6brWKgfjZLvnV-bwIxXHWvXFzrgPuPe0eGCtmkUwvuXRXtJLbUdo1m3FJEqAjCVQaP0nDMz8FbZAdMVFB6W8w0APtXkk5KWDH608VDIuDzhpJMNx~mihSEPj8CgbAIz6ZkTk99aWX2dmQteWm9QKewphON1nOfQ__",
      "rating": 4.9,
  },
  {
      "id": 15,
      "title": "Monsterra",
      "price": 299,
      "description": "Indoor Plant, Low maintenance",
      "image": "https://s3-alpha-sig.figma.com/img/5b18/a5fd/8150f68f85e80b39ed12017b8222dd1a?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aJEMdDt63Ic-AZhILS7rtSPXp~mLctW5OcS-6xQlJzZWv4ojnH8bvAJvZvqhnUj9prGamLSkO43C~YZavmZzx2YhF7Pb30i85Bv46q~529q6O9K-OOyA6tNw1BhEdNEo8vYaKGLQtxcZqjynXVeQgje6ZHcuGPs5EiRAeYjS5SBTJ3cCeHX6pglqDK-D~7~aPUCLUjfIySX82h2a18V~8xTsWXaGd-5zrmSgyOE9IbBjelMqJBQ1TVKkw9BWx1uM5LCXv4NJKM-IUjy3LbvQpVN4JS1CElh5A4JZIEl41DhtoA9XzlXbGnhDZ6urCG2kHuUcjmi9E~1alns-YT7lxA__",
      "rating": 4.9,
  },
{
      "id": 16,
      "title": "Monsterra",
      "price": 299,
      "description": "Indoor Plant, Low maintenance",
      "image": "https://s3-alpha-sig.figma.com/img/5d1d/9008/57a26487b27ba64aecadd2f4d7e83e50?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G1A-3swJ4YwcthBXqQLR~ciyuOmL1IZ7P40M1OLsKF~FiZA34DrWU36boYoYS39-CmQ2643Z76YmysIYXJTyGYJC7gKvauhhtEIvwaFnEh6hX-VZOn6tPtc9zViNZW5xgIRwcOagH7KwRYkrejo4XHzU8cO7qMPAsZab-4~j9jovvBM5g4Ttp9oTJX4iMtc8vEYTH1OY~vQ~FUvl~ABA2hbBHewQ8MqnQ-ihVEwZr9OFGJfsGAh7mWjVdNsUyvSmnaInIqMdOaXI7EJtH6oKjwtKZx5CBodSzI0o~gnW5wzkD8geFmhWKPiZ0eC4gIsnwZ9yi0BAg1M5oReXw8-jKw__",
      "rating": 4.9,
  },
  {
      "id": 17,
      "title": "Monsterra",
      "price": 299,
      "description": "Indoor Plant, Low maintenance",
      "image": "https://s3-alpha-sig.figma.com/img/6dd6/6981/e3d2febe446efa4b8f13ccd187d266f5?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n7jT9n2DM7j~L0LbU5K78ODjnCjgLq~pJN3hkI9LKIWVuP696UDEjHo4TwyefwevvVMCQM-Dhrq9R1WkvyiEy-lJG7v3kwe6dgXxb18ncMGtmP0tSyhyYTw-D3XYbGQ29WLMtZyDLR57mGF4IL~1j1pQlRyoiuC02LYVuKty3U3Dt2SdbGAUFRV6brWKgfjZLvnV-bwIxXHWvXFzrgPuPe0eGCtmkUwvuXRXtJLbUdo1m3FJEqAjCVQaP0nDMz8FbZAdMVFB6W8w0APtXkk5KWDH608VDIuDzhpJMNx~mihSEPj8CgbAIz6ZkTk99aWX2dmQteWm9QKewphON1nOfQ__",
      "rating": 4.9,
  },
  {
      "id": 18,
      "title": "Monsterra",
      "price": 299,
      "description": "Indoor Plant, Low maintenance",
      "image": "https://s3-alpha-sig.figma.com/img/5b18/a5fd/8150f68f85e80b39ed12017b8222dd1a?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aJEMdDt63Ic-AZhILS7rtSPXp~mLctW5OcS-6xQlJzZWv4ojnH8bvAJvZvqhnUj9prGamLSkO43C~YZavmZzx2YhF7Pb30i85Bv46q~529q6O9K-OOyA6tNw1BhEdNEo8vYaKGLQtxcZqjynXVeQgje6ZHcuGPs5EiRAeYjS5SBTJ3cCeHX6pglqDK-D~7~aPUCLUjfIySX82h2a18V~8xTsWXaGd-5zrmSgyOE9IbBjelMqJBQ1TVKkw9BWx1uM5LCXv4NJKM-IUjy3LbvQpVN4JS1CElh5A4JZIEl41DhtoA9XzlXbGnhDZ6urCG2kHuUcjmi9E~1alns-YT7lxA__",
      "rating": 4.9,
  },
{
      "id": 19,
      "title": "Monsterra",
      "price": 299,
      "description": "Indoor Plant, Low maintenance",
      "image": "https://s3-alpha-sig.figma.com/img/5d1d/9008/57a26487b27ba64aecadd2f4d7e83e50?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G1A-3swJ4YwcthBXqQLR~ciyuOmL1IZ7P40M1OLsKF~FiZA34DrWU36boYoYS39-CmQ2643Z76YmysIYXJTyGYJC7gKvauhhtEIvwaFnEh6hX-VZOn6tPtc9zViNZW5xgIRwcOagH7KwRYkrejo4XHzU8cO7qMPAsZab-4~j9jovvBM5g4Ttp9oTJX4iMtc8vEYTH1OY~vQ~FUvl~ABA2hbBHewQ8MqnQ-ihVEwZr9OFGJfsGAh7mWjVdNsUyvSmnaInIqMdOaXI7EJtH6oKjwtKZx5CBodSzI0o~gnW5wzkD8geFmhWKPiZ0eC4gIsnwZ9yi0BAg1M5oReXw8-jKw__",
      "rating": 4.9,
  },
  {
      "id": 20,
      "title": "Monsterra",
      "price": 299,
      "description": "Indoor Plant, Low maintenance",
      "image": "https://s3-alpha-sig.figma.com/img/6dd6/6981/e3d2febe446efa4b8f13ccd187d266f5?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n7jT9n2DM7j~L0LbU5K78ODjnCjgLq~pJN3hkI9LKIWVuP696UDEjHo4TwyefwevvVMCQM-Dhrq9R1WkvyiEy-lJG7v3kwe6dgXxb18ncMGtmP0tSyhyYTw-D3XYbGQ29WLMtZyDLR57mGF4IL~1j1pQlRyoiuC02LYVuKty3U3Dt2SdbGAUFRV6brWKgfjZLvnV-bwIxXHWvXFzrgPuPe0eGCtmkUwvuXRXtJLbUdo1m3FJEqAjCVQaP0nDMz8FbZAdMVFB6W8w0APtXkk5KWDH608VDIuDzhpJMNx~mihSEPj8CgbAIz6ZkTk99aWX2dmQteWm9QKewphON1nOfQ__",
      "rating": 4.9,
  },
  {
      "id": 21,
      "title": "Monsterra",
      "price": 299,
      "description": "Indoor Plant, Low maintenance",
      "image": "https://s3-alpha-sig.figma.com/img/5b18/a5fd/8150f68f85e80b39ed12017b8222dd1a?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aJEMdDt63Ic-AZhILS7rtSPXp~mLctW5OcS-6xQlJzZWv4ojnH8bvAJvZvqhnUj9prGamLSkO43C~YZavmZzx2YhF7Pb30i85Bv46q~529q6O9K-OOyA6tNw1BhEdNEo8vYaKGLQtxcZqjynXVeQgje6ZHcuGPs5EiRAeYjS5SBTJ3cCeHX6pglqDK-D~7~aPUCLUjfIySX82h2a18V~8xTsWXaGd-5zrmSgyOE9IbBjelMqJBQ1TVKkw9BWx1uM5LCXv4NJKM-IUjy3LbvQpVN4JS1CElh5A4JZIEl41DhtoA9XzlXbGnhDZ6urCG2kHuUcjmi9E~1alns-YT7lxA__",
      "rating": 4.9,
  },
{
      "id": 22,
      "title": "Monsterra",
      "price": 299,
      "description": "Indoor Plant, Low maintenance",
      "image": "https://s3-alpha-sig.figma.com/img/5d1d/9008/57a26487b27ba64aecadd2f4d7e83e50?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G1A-3swJ4YwcthBXqQLR~ciyuOmL1IZ7P40M1OLsKF~FiZA34DrWU36boYoYS39-CmQ2643Z76YmysIYXJTyGYJC7gKvauhhtEIvwaFnEh6hX-VZOn6tPtc9zViNZW5xgIRwcOagH7KwRYkrejo4XHzU8cO7qMPAsZab-4~j9jovvBM5g4Ttp9oTJX4iMtc8vEYTH1OY~vQ~FUvl~ABA2hbBHewQ8MqnQ-ihVEwZr9OFGJfsGAh7mWjVdNsUyvSmnaInIqMdOaXI7EJtH6oKjwtKZx5CBodSzI0o~gnW5wzkD8geFmhWKPiZ0eC4gIsnwZ9yi0BAg1M5oReXw8-jKw__",
      "rating": 4.9,
  },
  {
      "id": 23,
      "title": "Monsterra",
      "price": 299,
      "description": "Indoor Plant, Low maintenance",
      "image": "https://s3-alpha-sig.figma.com/img/6dd6/6981/e3d2febe446efa4b8f13ccd187d266f5?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n7jT9n2DM7j~L0LbU5K78ODjnCjgLq~pJN3hkI9LKIWVuP696UDEjHo4TwyefwevvVMCQM-Dhrq9R1WkvyiEy-lJG7v3kwe6dgXxb18ncMGtmP0tSyhyYTw-D3XYbGQ29WLMtZyDLR57mGF4IL~1j1pQlRyoiuC02LYVuKty3U3Dt2SdbGAUFRV6brWKgfjZLvnV-bwIxXHWvXFzrgPuPe0eGCtmkUwvuXRXtJLbUdo1m3FJEqAjCVQaP0nDMz8FbZAdMVFB6W8w0APtXkk5KWDH608VDIuDzhpJMNx~mihSEPj8CgbAIz6ZkTk99aWX2dmQteWm9QKewphON1nOfQ__",
      "rating": 4.9,
  },
  {
      "id": 24,
      "title": "Monsterra",
      "price": 299,
      "description": "Indoor Plant, Low maintenance",
      "image": "https://s3-alpha-sig.figma.com/img/5b18/a5fd/8150f68f85e80b39ed12017b8222dd1a?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aJEMdDt63Ic-AZhILS7rtSPXp~mLctW5OcS-6xQlJzZWv4ojnH8bvAJvZvqhnUj9prGamLSkO43C~YZavmZzx2YhF7Pb30i85Bv46q~529q6O9K-OOyA6tNw1BhEdNEo8vYaKGLQtxcZqjynXVeQgje6ZHcuGPs5EiRAeYjS5SBTJ3cCeHX6pglqDK-D~7~aPUCLUjfIySX82h2a18V~8xTsWXaGd-5zrmSgyOE9IbBjelMqJBQ1TVKkw9BWx1uM5LCXv4NJKM-IUjy3LbvQpVN4JS1CElh5A4JZIEl41DhtoA9XzlXbGnhDZ6urCG2kHuUcjmi9E~1alns-YT7lxA__",
      "rating": 4.9,
  },
{
      "id": 25,
      "title": "Monsterra",
      "price": 299,
      "description": "Indoor Plant, Low maintenance",
      "image": "https://s3-alpha-sig.figma.com/img/5d1d/9008/57a26487b27ba64aecadd2f4d7e83e50?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G1A-3swJ4YwcthBXqQLR~ciyuOmL1IZ7P40M1OLsKF~FiZA34DrWU36boYoYS39-CmQ2643Z76YmysIYXJTyGYJC7gKvauhhtEIvwaFnEh6hX-VZOn6tPtc9zViNZW5xgIRwcOagH7KwRYkrejo4XHzU8cO7qMPAsZab-4~j9jovvBM5g4Ttp9oTJX4iMtc8vEYTH1OY~vQ~FUvl~ABA2hbBHewQ8MqnQ-ihVEwZr9OFGJfsGAh7mWjVdNsUyvSmnaInIqMdOaXI7EJtH6oKjwtKZx5CBodSzI0o~gnW5wzkD8geFmhWKPiZ0eC4gIsnwZ9yi0BAg1M5oReXw8-jKw__",
      "rating": 4.9,
  },
  {
      "id": 26,
      "title": "Monsterra",
      "price": 299,
      "description": "Indoor Plant, Low maintenance",
      "image": "https://s3-alpha-sig.figma.com/img/6dd6/6981/e3d2febe446efa4b8f13ccd187d266f5?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n7jT9n2DM7j~L0LbU5K78ODjnCjgLq~pJN3hkI9LKIWVuP696UDEjHo4TwyefwevvVMCQM-Dhrq9R1WkvyiEy-lJG7v3kwe6dgXxb18ncMGtmP0tSyhyYTw-D3XYbGQ29WLMtZyDLR57mGF4IL~1j1pQlRyoiuC02LYVuKty3U3Dt2SdbGAUFRV6brWKgfjZLvnV-bwIxXHWvXFzrgPuPe0eGCtmkUwvuXRXtJLbUdo1m3FJEqAjCVQaP0nDMz8FbZAdMVFB6W8w0APtXkk5KWDH608VDIuDzhpJMNx~mihSEPj8CgbAIz6ZkTk99aWX2dmQteWm9QKewphON1nOfQ__",
      "rating": 4.9,
  },
  {
      "id": 27,
      "title": "Monsterra",
      "price": 299,
      "description": "Indoor Plant, Low maintenance",
      "image": "https://s3-alpha-sig.figma.com/img/5b18/a5fd/8150f68f85e80b39ed12017b8222dd1a?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aJEMdDt63Ic-AZhILS7rtSPXp~mLctW5OcS-6xQlJzZWv4ojnH8bvAJvZvqhnUj9prGamLSkO43C~YZavmZzx2YhF7Pb30i85Bv46q~529q6O9K-OOyA6tNw1BhEdNEo8vYaKGLQtxcZqjynXVeQgje6ZHcuGPs5EiRAeYjS5SBTJ3cCeHX6pglqDK-D~7~aPUCLUjfIySX82h2a18V~8xTsWXaGd-5zrmSgyOE9IbBjelMqJBQ1TVKkw9BWx1uM5LCXv4NJKM-IUjy3LbvQpVN4JS1CElh5A4JZIEl41DhtoA9XzlXbGnhDZ6urCG2kHuUcjmi9E~1alns-YT7lxA__",
      "rating": 4.9,
  },
{
      "id": 28,
      "title": "Monsterra",
      "price": 299,
      "description": "Indoor Plant, Low maintenance",
      "image": "https://s3-alpha-sig.figma.com/img/5d1d/9008/57a26487b27ba64aecadd2f4d7e83e50?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G1A-3swJ4YwcthBXqQLR~ciyuOmL1IZ7P40M1OLsKF~FiZA34DrWU36boYoYS39-CmQ2643Z76YmysIYXJTyGYJC7gKvauhhtEIvwaFnEh6hX-VZOn6tPtc9zViNZW5xgIRwcOagH7KwRYkrejo4XHzU8cO7qMPAsZab-4~j9jovvBM5g4Ttp9oTJX4iMtc8vEYTH1OY~vQ~FUvl~ABA2hbBHewQ8MqnQ-ihVEwZr9OFGJfsGAh7mWjVdNsUyvSmnaInIqMdOaXI7EJtH6oKjwtKZx5CBodSzI0o~gnW5wzkD8geFmhWKPiZ0eC4gIsnwZ9yi0BAg1M5oReXw8-jKw__",
      "rating": 4.9,
  },
  {
      "id": 29,
      "title": "Monsterra",
      "price": 299,
      "description": "Indoor Plant, Low maintenance",
      "image": "https://s3-alpha-sig.figma.com/img/6dd6/6981/e3d2febe446efa4b8f13ccd187d266f5?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n7jT9n2DM7j~L0LbU5K78ODjnCjgLq~pJN3hkI9LKIWVuP696UDEjHo4TwyefwevvVMCQM-Dhrq9R1WkvyiEy-lJG7v3kwe6dgXxb18ncMGtmP0tSyhyYTw-D3XYbGQ29WLMtZyDLR57mGF4IL~1j1pQlRyoiuC02LYVuKty3U3Dt2SdbGAUFRV6brWKgfjZLvnV-bwIxXHWvXFzrgPuPe0eGCtmkUwvuXRXtJLbUdo1m3FJEqAjCVQaP0nDMz8FbZAdMVFB6W8w0APtXkk5KWDH608VDIuDzhpJMNx~mihSEPj8CgbAIz6ZkTk99aWX2dmQteWm9QKewphON1nOfQ__",
      "rating": 4.9,
  },
  {
      "id": 30,
      "title": "Monsterra",
      "price": 299,
      "description": "Indoor Plant, Low maintenance",
      "image": "https://s3-alpha-sig.figma.com/img/5b18/a5fd/8150f68f85e80b39ed12017b8222dd1a?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aJEMdDt63Ic-AZhILS7rtSPXp~mLctW5OcS-6xQlJzZWv4ojnH8bvAJvZvqhnUj9prGamLSkO43C~YZavmZzx2YhF7Pb30i85Bv46q~529q6O9K-OOyA6tNw1BhEdNEo8vYaKGLQtxcZqjynXVeQgje6ZHcuGPs5EiRAeYjS5SBTJ3cCeHX6pglqDK-D~7~aPUCLUjfIySX82h2a18V~8xTsWXaGd-5zrmSgyOE9IbBjelMqJBQ1TVKkw9BWx1uM5LCXv4NJKM-IUjy3LbvQpVN4JS1CElh5A4JZIEl41DhtoA9XzlXbGnhDZ6urCG2kHuUcjmi9E~1alns-YT7lxA__",
      "rating": 4.9,
  },
{
      "id": 31,
      "title": "Monsterra",
      "price": 299,
      "description": "Indoor Plant, Low maintenance",
      "image": "https://s3-alpha-sig.figma.com/img/5d1d/9008/57a26487b27ba64aecadd2f4d7e83e50?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G1A-3swJ4YwcthBXqQLR~ciyuOmL1IZ7P40M1OLsKF~FiZA34DrWU36boYoYS39-CmQ2643Z76YmysIYXJTyGYJC7gKvauhhtEIvwaFnEh6hX-VZOn6tPtc9zViNZW5xgIRwcOagH7KwRYkrejo4XHzU8cO7qMPAsZab-4~j9jovvBM5g4Ttp9oTJX4iMtc8vEYTH1OY~vQ~FUvl~ABA2hbBHewQ8MqnQ-ihVEwZr9OFGJfsGAh7mWjVdNsUyvSmnaInIqMdOaXI7EJtH6oKjwtKZx5CBodSzI0o~gnW5wzkD8geFmhWKPiZ0eC4gIsnwZ9yi0BAg1M5oReXw8-jKw__",
      "rating": 4.9,
  },
  {
      "id": 32,
      "title": "Monsterra",
      "price": 299,
      "description": "Indoor Plant, Low maintenance",
      "image": "https://s3-alpha-sig.figma.com/img/6dd6/6981/e3d2febe446efa4b8f13ccd187d266f5?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n7jT9n2DM7j~L0LbU5K78ODjnCjgLq~pJN3hkI9LKIWVuP696UDEjHo4TwyefwevvVMCQM-Dhrq9R1WkvyiEy-lJG7v3kwe6dgXxb18ncMGtmP0tSyhyYTw-D3XYbGQ29WLMtZyDLR57mGF4IL~1j1pQlRyoiuC02LYVuKty3U3Dt2SdbGAUFRV6brWKgfjZLvnV-bwIxXHWvXFzrgPuPe0eGCtmkUwvuXRXtJLbUdo1m3FJEqAjCVQaP0nDMz8FbZAdMVFB6W8w0APtXkk5KWDH608VDIuDzhpJMNx~mihSEPj8CgbAIz6ZkTk99aWX2dmQteWm9QKewphON1nOfQ__",
      "rating": 4.9,
  },
  {
      "id": 33,
      "title": "Monsterra",
      "price": 299,
      "description": "Indoor Plant, Low maintenance",
      "image": "https://s3-alpha-sig.figma.com/img/5b18/a5fd/8150f68f85e80b39ed12017b8222dd1a?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aJEMdDt63Ic-AZhILS7rtSPXp~mLctW5OcS-6xQlJzZWv4ojnH8bvAJvZvqhnUj9prGamLSkO43C~YZavmZzx2YhF7Pb30i85Bv46q~529q6O9K-OOyA6tNw1BhEdNEo8vYaKGLQtxcZqjynXVeQgje6ZHcuGPs5EiRAeYjS5SBTJ3cCeHX6pglqDK-D~7~aPUCLUjfIySX82h2a18V~8xTsWXaGd-5zrmSgyOE9IbBjelMqJBQ1TVKkw9BWx1uM5LCXv4NJKM-IUjy3LbvQpVN4JS1CElh5A4JZIEl41DhtoA9XzlXbGnhDZ6urCG2kHuUcjmi9E~1alns-YT7lxA__",
      "rating": 4.9,
  },

{
      "id": 34,
      "title": "Monsterra",
      "price": 299,
      "description": "Indoor Plant, Low maintenance",
      "image": "https://s3-alpha-sig.figma.com/img/5d1d/9008/57a26487b27ba64aecadd2f4d7e83e50?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G1A-3swJ4YwcthBXqQLR~ciyuOmL1IZ7P40M1OLsKF~FiZA34DrWU36boYoYS39-CmQ2643Z76YmysIYXJTyGYJC7gKvauhhtEIvwaFnEh6hX-VZOn6tPtc9zViNZW5xgIRwcOagH7KwRYkrejo4XHzU8cO7qMPAsZab-4~j9jovvBM5g4Ttp9oTJX4iMtc8vEYTH1OY~vQ~FUvl~ABA2hbBHewQ8MqnQ-ihVEwZr9OFGJfsGAh7mWjVdNsUyvSmnaInIqMdOaXI7EJtH6oKjwtKZx5CBodSzI0o~gnW5wzkD8geFmhWKPiZ0eC4gIsnwZ9yi0BAg1M5oReXw8-jKw__",
      "rating": 4.9,
  },
  {
      "id": 35,
      "title": "Monsterra",
      "price": 299,
      "description": "Indoor Plant, Low maintenance",
      "image": "https://s3-alpha-sig.figma.com/img/6dd6/6981/e3d2febe446efa4b8f13ccd187d266f5?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n7jT9n2DM7j~L0LbU5K78ODjnCjgLq~pJN3hkI9LKIWVuP696UDEjHo4TwyefwevvVMCQM-Dhrq9R1WkvyiEy-lJG7v3kwe6dgXxb18ncMGtmP0tSyhyYTw-D3XYbGQ29WLMtZyDLR57mGF4IL~1j1pQlRyoiuC02LYVuKty3U3Dt2SdbGAUFRV6brWKgfjZLvnV-bwIxXHWvXFzrgPuPe0eGCtmkUwvuXRXtJLbUdo1m3FJEqAjCVQaP0nDMz8FbZAdMVFB6W8w0APtXkk5KWDH608VDIuDzhpJMNx~mihSEPj8CgbAIz6ZkTk99aWX2dmQteWm9QKewphON1nOfQ__",
      "rating": 4.9,
  },
  {
      "id": 36,
      "title": "Monsterra",
      "price": 299,
      "description": "Indoor Plant, Low maintenance",
      "image": "https://s3-alpha-sig.figma.com/img/5b18/a5fd/8150f68f85e80b39ed12017b8222dd1a?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aJEMdDt63Ic-AZhILS7rtSPXp~mLctW5OcS-6xQlJzZWv4ojnH8bvAJvZvqhnUj9prGamLSkO43C~YZavmZzx2YhF7Pb30i85Bv46q~529q6O9K-OOyA6tNw1BhEdNEo8vYaKGLQtxcZqjynXVeQgje6ZHcuGPs5EiRAeYjS5SBTJ3cCeHX6pglqDK-D~7~aPUCLUjfIySX82h2a18V~8xTsWXaGd-5zrmSgyOE9IbBjelMqJBQ1TVKkw9BWx1uM5LCXv4NJKM-IUjy3LbvQpVN4JS1CElh5A4JZIEl41DhtoA9XzlXbGnhDZ6urCG2kHuUcjmi9E~1alns-YT7lxA__",
      "rating": 4.9,
  },

{
      "id": 37,
      "title": "Monsterra",
      "price": 299,
      "description": "Indoor Plant, Low maintenance",
      "image": "https://s3-alpha-sig.figma.com/img/5d1d/9008/57a26487b27ba64aecadd2f4d7e83e50?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G1A-3swJ4YwcthBXqQLR~ciyuOmL1IZ7P40M1OLsKF~FiZA34DrWU36boYoYS39-CmQ2643Z76YmysIYXJTyGYJC7gKvauhhtEIvwaFnEh6hX-VZOn6tPtc9zViNZW5xgIRwcOagH7KwRYkrejo4XHzU8cO7qMPAsZab-4~j9jovvBM5g4Ttp9oTJX4iMtc8vEYTH1OY~vQ~FUvl~ABA2hbBHewQ8MqnQ-ihVEwZr9OFGJfsGAh7mWjVdNsUyvSmnaInIqMdOaXI7EJtH6oKjwtKZx5CBodSzI0o~gnW5wzkD8geFmhWKPiZ0eC4gIsnwZ9yi0BAg1M5oReXw8-jKw__",
      "rating": 4.9,
  },
  {
      "id": 38,
      "title": "Monsterra",
      "price": 299,
      "description": "Indoor Plant, Low maintenance",
      "image": "https://s3-alpha-sig.figma.com/img/6dd6/6981/e3d2febe446efa4b8f13ccd187d266f5?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n7jT9n2DM7j~L0LbU5K78ODjnCjgLq~pJN3hkI9LKIWVuP696UDEjHo4TwyefwevvVMCQM-Dhrq9R1WkvyiEy-lJG7v3kwe6dgXxb18ncMGtmP0tSyhyYTw-D3XYbGQ29WLMtZyDLR57mGF4IL~1j1pQlRyoiuC02LYVuKty3U3Dt2SdbGAUFRV6brWKgfjZLvnV-bwIxXHWvXFzrgPuPe0eGCtmkUwvuXRXtJLbUdo1m3FJEqAjCVQaP0nDMz8FbZAdMVFB6W8w0APtXkk5KWDH608VDIuDzhpJMNx~mihSEPj8CgbAIz6ZkTk99aWX2dmQteWm9QKewphON1nOfQ__",
      "rating": 4.9,
  },
  {
      "id": 39,
      "title": "Monsterra",
      "price": 299,
      "description": "Indoor Plant, Low maintenance",
      "image": "https://s3-alpha-sig.figma.com/img/5b18/a5fd/8150f68f85e80b39ed12017b8222dd1a?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aJEMdDt63Ic-AZhILS7rtSPXp~mLctW5OcS-6xQlJzZWv4ojnH8bvAJvZvqhnUj9prGamLSkO43C~YZavmZzx2YhF7Pb30i85Bv46q~529q6O9K-OOyA6tNw1BhEdNEo8vYaKGLQtxcZqjynXVeQgje6ZHcuGPs5EiRAeYjS5SBTJ3cCeHX6pglqDK-D~7~aPUCLUjfIySX82h2a18V~8xTsWXaGd-5zrmSgyOE9IbBjelMqJBQ1TVKkw9BWx1uM5LCXv4NJKM-IUjy3LbvQpVN4JS1CElh5A4JZIEl41DhtoA9XzlXbGnhDZ6urCG2kHuUcjmi9E~1alns-YT7lxA__",
      "rating": 4.9,
  },

{
      "id": 40,
      "title": "Monsterra",
      "price": 299,
      "description": "Indoor Plant, Low maintenance",
      "image": "https://s3-alpha-sig.figma.com/img/5d1d/9008/57a26487b27ba64aecadd2f4d7e83e50?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G1A-3swJ4YwcthBXqQLR~ciyuOmL1IZ7P40M1OLsKF~FiZA34DrWU36boYoYS39-CmQ2643Z76YmysIYXJTyGYJC7gKvauhhtEIvwaFnEh6hX-VZOn6tPtc9zViNZW5xgIRwcOagH7KwRYkrejo4XHzU8cO7qMPAsZab-4~j9jovvBM5g4Ttp9oTJX4iMtc8vEYTH1OY~vQ~FUvl~ABA2hbBHewQ8MqnQ-ihVEwZr9OFGJfsGAh7mWjVdNsUyvSmnaInIqMdOaXI7EJtH6oKjwtKZx5CBodSzI0o~gnW5wzkD8geFmhWKPiZ0eC4gIsnwZ9yi0BAg1M5oReXw8-jKw__",
      "rating": 4.9,
  },
  {
      "id": 41,
      "title": "Monsterra",
      "price": 299,
      "description": "Indoor Plant, Low maintenance",
      "image": "https://s3-alpha-sig.figma.com/img/6dd6/6981/e3d2febe446efa4b8f13ccd187d266f5?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n7jT9n2DM7j~L0LbU5K78ODjnCjgLq~pJN3hkI9LKIWVuP696UDEjHo4TwyefwevvVMCQM-Dhrq9R1WkvyiEy-lJG7v3kwe6dgXxb18ncMGtmP0tSyhyYTw-D3XYbGQ29WLMtZyDLR57mGF4IL~1j1pQlRyoiuC02LYVuKty3U3Dt2SdbGAUFRV6brWKgfjZLvnV-bwIxXHWvXFzrgPuPe0eGCtmkUwvuXRXtJLbUdo1m3FJEqAjCVQaP0nDMz8FbZAdMVFB6W8w0APtXkk5KWDH608VDIuDzhpJMNx~mihSEPj8CgbAIz6ZkTk99aWX2dmQteWm9QKewphON1nOfQ__",
      "rating": 4.9,
  },
  {
      "id": 42,
      "title": "Monsterra",
      "price": 299,
      "description": "Indoor Plant, Low maintenance",
      "image": "https://s3-alpha-sig.figma.com/img/5b18/a5fd/8150f68f85e80b39ed12017b8222dd1a?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aJEMdDt63Ic-AZhILS7rtSPXp~mLctW5OcS-6xQlJzZWv4ojnH8bvAJvZvqhnUj9prGamLSkO43C~YZavmZzx2YhF7Pb30i85Bv46q~529q6O9K-OOyA6tNw1BhEdNEo8vYaKGLQtxcZqjynXVeQgje6ZHcuGPs5EiRAeYjS5SBTJ3cCeHX6pglqDK-D~7~aPUCLUjfIySX82h2a18V~8xTsWXaGd-5zrmSgyOE9IbBjelMqJBQ1TVKkw9BWx1uM5LCXv4NJKM-IUjy3LbvQpVN4JS1CElh5A4JZIEl41DhtoA9XzlXbGnhDZ6urCG2kHuUcjmi9E~1alns-YT7lxA__",
      "rating": 4.9,
  },

{
      "id": 43,
      "title": "Monsterra",
      "price": 299,
      "description": "Indoor Plant, Low maintenance",
      "image": "https://s3-alpha-sig.figma.com/img/5d1d/9008/57a26487b27ba64aecadd2f4d7e83e50?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G1A-3swJ4YwcthBXqQLR~ciyuOmL1IZ7P40M1OLsKF~FiZA34DrWU36boYoYS39-CmQ2643Z76YmysIYXJTyGYJC7gKvauhhtEIvwaFnEh6hX-VZOn6tPtc9zViNZW5xgIRwcOagH7KwRYkrejo4XHzU8cO7qMPAsZab-4~j9jovvBM5g4Ttp9oTJX4iMtc8vEYTH1OY~vQ~FUvl~ABA2hbBHewQ8MqnQ-ihVEwZr9OFGJfsGAh7mWjVdNsUyvSmnaInIqMdOaXI7EJtH6oKjwtKZx5CBodSzI0o~gnW5wzkD8geFmhWKPiZ0eC4gIsnwZ9yi0BAg1M5oReXw8-jKw__",
      "rating": 4.9,
  },
  {
      "id": 44,
      "title": "Monsterra",
      "price": 299,
      "description": "Indoor Plant, Low maintenance",
      "image": "https://s3-alpha-sig.figma.com/img/6dd6/6981/e3d2febe446efa4b8f13ccd187d266f5?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n7jT9n2DM7j~L0LbU5K78ODjnCjgLq~pJN3hkI9LKIWVuP696UDEjHo4TwyefwevvVMCQM-Dhrq9R1WkvyiEy-lJG7v3kwe6dgXxb18ncMGtmP0tSyhyYTw-D3XYbGQ29WLMtZyDLR57mGF4IL~1j1pQlRyoiuC02LYVuKty3U3Dt2SdbGAUFRV6brWKgfjZLvnV-bwIxXHWvXFzrgPuPe0eGCtmkUwvuXRXtJLbUdo1m3FJEqAjCVQaP0nDMz8FbZAdMVFB6W8w0APtXkk5KWDH608VDIuDzhpJMNx~mihSEPj8CgbAIz6ZkTk99aWX2dmQteWm9QKewphON1nOfQ__",
      "rating": 4.9,
  },
  {
      "id": 45,
      "title": "Monsterra",
      "price": 299,
      "description": "Indoor Plant, Low maintenance",
      "image": "https://s3-alpha-sig.figma.com/img/5b18/a5fd/8150f68f85e80b39ed12017b8222dd1a?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aJEMdDt63Ic-AZhILS7rtSPXp~mLctW5OcS-6xQlJzZWv4ojnH8bvAJvZvqhnUj9prGamLSkO43C~YZavmZzx2YhF7Pb30i85Bv46q~529q6O9K-OOyA6tNw1BhEdNEo8vYaKGLQtxcZqjynXVeQgje6ZHcuGPs5EiRAeYjS5SBTJ3cCeHX6pglqDK-D~7~aPUCLUjfIySX82h2a18V~8xTsWXaGd-5zrmSgyOE9IbBjelMqJBQ1TVKkw9BWx1uM5LCXv4NJKM-IUjy3LbvQpVN4JS1CElh5A4JZIEl41DhtoA9XzlXbGnhDZ6urCG2kHuUcjmi9E~1alns-YT7lxA__",
      "rating": 4.9,
  },

  {
      "id": 46,
      "title": "Monsterra",
      "price": 299,
      "description": "Indoor Plant, Low maintenance",
      "image": "https://s3-alpha-sig.figma.com/img/5d1d/9008/57a26487b27ba64aecadd2f4d7e83e50?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G1A-3swJ4YwcthBXqQLR~ciyuOmL1IZ7P40M1OLsKF~FiZA34DrWU36boYoYS39-CmQ2643Z76YmysIYXJTyGYJC7gKvauhhtEIvwaFnEh6hX-VZOn6tPtc9zViNZW5xgIRwcOagH7KwRYkrejo4XHzU8cO7qMPAsZab-4~j9jovvBM5g4Ttp9oTJX4iMtc8vEYTH1OY~vQ~FUvl~ABA2hbBHewQ8MqnQ-ihVEwZr9OFGJfsGAh7mWjVdNsUyvSmnaInIqMdOaXI7EJtH6oKjwtKZx5CBodSzI0o~gnW5wzkD8geFmhWKPiZ0eC4gIsnwZ9yi0BAg1M5oReXw8-jKw__",
      "rating": 4.9,
  },
  {
      "id": 47,
      "title": "Monsterra",
      "price": 299,
      "description": "Indoor Plant, Low maintenance",
      "image": "https://s3-alpha-sig.figma.com/img/6dd6/6981/e3d2febe446efa4b8f13ccd187d266f5?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n7jT9n2DM7j~L0LbU5K78ODjnCjgLq~pJN3hkI9LKIWVuP696UDEjHo4TwyefwevvVMCQM-Dhrq9R1WkvyiEy-lJG7v3kwe6dgXxb18ncMGtmP0tSyhyYTw-D3XYbGQ29WLMtZyDLR57mGF4IL~1j1pQlRyoiuC02LYVuKty3U3Dt2SdbGAUFRV6brWKgfjZLvnV-bwIxXHWvXFzrgPuPe0eGCtmkUwvuXRXtJLbUdo1m3FJEqAjCVQaP0nDMz8FbZAdMVFB6W8w0APtXkk5KWDH608VDIuDzhpJMNx~mihSEPj8CgbAIz6ZkTk99aWX2dmQteWm9QKewphON1nOfQ__",
      "rating": 4.9,
  },
  {
      "id": 48,
      "title": "Monsterra",
      "price": 299,
      "description": "Indoor Plant, Low maintenance",
      "image": "https://s3-alpha-sig.figma.com/img/5b18/a5fd/8150f68f85e80b39ed12017b8222dd1a?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aJEMdDt63Ic-AZhILS7rtSPXp~mLctW5OcS-6xQlJzZWv4ojnH8bvAJvZvqhnUj9prGamLSkO43C~YZavmZzx2YhF7Pb30i85Bv46q~529q6O9K-OOyA6tNw1BhEdNEo8vYaKGLQtxcZqjynXVeQgje6ZHcuGPs5EiRAeYjS5SBTJ3cCeHX6pglqDK-D~7~aPUCLUjfIySX82h2a18V~8xTsWXaGd-5zrmSgyOE9IbBjelMqJBQ1TVKkw9BWx1uM5LCXv4NJKM-IUjy3LbvQpVN4JS1CElh5A4JZIEl41DhtoA9XzlXbGnhDZ6urCG2kHuUcjmi9E~1alns-YT7lxA__",
      "rating": 4.9,
  },

  {
      "id": 49,
      "title": "Monsterra",
      "price": 299,
      "description": "Indoor Plant, Low maintenance",
      "image": "https://s3-alpha-sig.figma.com/img/5d1d/9008/57a26487b27ba64aecadd2f4d7e83e50?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G1A-3swJ4YwcthBXqQLR~ciyuOmL1IZ7P40M1OLsKF~FiZA34DrWU36boYoYS39-CmQ2643Z76YmysIYXJTyGYJC7gKvauhhtEIvwaFnEh6hX-VZOn6tPtc9zViNZW5xgIRwcOagH7KwRYkrejo4XHzU8cO7qMPAsZab-4~j9jovvBM5g4Ttp9oTJX4iMtc8vEYTH1OY~vQ~FUvl~ABA2hbBHewQ8MqnQ-ihVEwZr9OFGJfsGAh7mWjVdNsUyvSmnaInIqMdOaXI7EJtH6oKjwtKZx5CBodSzI0o~gnW5wzkD8geFmhWKPiZ0eC4gIsnwZ9yi0BAg1M5oReXw8-jKw__",
      "rating": 4.9,
  },
  {
      "id": 50,
      "title": "Monsterra",
      "price": 299,
      "description": "Indoor Plant, Low maintenance",
      "image": "https://s3-alpha-sig.figma.com/img/6dd6/6981/e3d2febe446efa4b8f13ccd187d266f5?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n7jT9n2DM7j~L0LbU5K78ODjnCjgLq~pJN3hkI9LKIWVuP696UDEjHo4TwyefwevvVMCQM-Dhrq9R1WkvyiEy-lJG7v3kwe6dgXxb18ncMGtmP0tSyhyYTw-D3XYbGQ29WLMtZyDLR57mGF4IL~1j1pQlRyoiuC02LYVuKty3U3Dt2SdbGAUFRV6brWKgfjZLvnV-bwIxXHWvXFzrgPuPe0eGCtmkUwvuXRXtJLbUdo1m3FJEqAjCVQaP0nDMz8FbZAdMVFB6W8w0APtXkk5KWDH608VDIuDzhpJMNx~mihSEPj8CgbAIz6ZkTk99aWX2dmQteWm9QKewphON1nOfQ__",
      "rating": 4.9,
  },

]


const Products = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const productsPerPage = 6
    const totalPages = Math.ceil(plantData.length/productsPerPage);

    const lastIndex = currentPage * productsPerPage
    const firstIndex = lastIndex - productsPerPage
    const newData = plantData.slice(firstIndex,lastIndex)
    

  const renderSearchContainer = () => {
    return(
        <div className='search-container'>
          <MagnifyingGlass size={20} className='search-icon-style'/>
          <input className='search-input' type="text" placeholder="Search Plant"/>
          <img className='search-image-style' src="https://s3-alpha-sig.figma.com/img/3a30/d80e/594c268f203b8704f61985100fae62d6?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ECIAJtsSLBVXgl2YF31TxKtq5s0LuX-WtEAzq6FqsAwtmZqiS-DsBkPIwI7mmd0ENoIRLeFKfIjRs5lPiIOarypWJhPEpdI2MHEdJkN1xO7rPxfi6Fivh6LStPxif7cKgwH6k8~PerjWx0Mh5He89Sd3dhBBzSoVHJbRu3RrNjEiGdnLBB7zqjdkw-G736mL7wI656dFi0pWcNGgWTzpC8Gx8DZC4Xf34jdHqhDOfR4kbBMTDGR6JUiDdCwChwHow27J6anCaHgCGyxB2hSvt1vhj2sGVI2cstk7qHKKBVKVoJwELI3jKy9S17QquNjtZWTSwgOnlOFdC1vmzV3X6w__" alt="search-image"/>
        </div>
    )
  }


  const renderProducts = () => {
    return(
       <div className='container'>
            <div className='sort-container'>
                <p>{plantData.length} products</p>
                <div className='sort-button'>
                    <p >SORT BY </p>
                    <CaretDown size={24} />
                </div>
            </div>
            <div>
                <ul className='products-list-container'>
                    {newData.map(each => (
                        <ProductsList key={each.id} plantDetail = {each}/>
                    ))}
                </ul>
            </div>
            <div className='pagination-container'> <Pagination totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage}/> </div>
        </div>
    )
  }

  const renderSideBar = () => {
    return(
        <div className='sidebar-container'>
            <div className='words-container'>
                <p>Filter</p>
                <p>CLEAR ALL</p>
            </div>
            <hr/>
            <div className='words-container'>
                <p>Type of Plants</p>
                <Plus size={16} />
            </div>
            <hr/>
            <div className='words-container'>
                <p>Price</p>
                <Plus size={16} />
            </div>
            <hr/>
            <div className='words-container'>
                <p>Nursery</p>
                <Plus size={16} />
            </div>
            <hr/>
            <div className='words-container'>
                <p>Ideal Plants Location</p>
                <Plus size={16} />
            </div>
            <hr/>
            <div className='words-container'>
                <p>Indoor / Outdoor</p>
                <Plus size={16} />
            </div>
            <hr/>
            <div className='words-container'>
                <p>Maintenance</p>
                <Plus size={16} />
            </div>
            <hr/>
            <div className='words-container'>
                <p>Plant Size</p>
                <Plus size={16} />
            </div>
            <hr/>
            <div className='words-container'>
                <p>Water Schedule</p>
                <Plus size={16} />
            </div>
            <hr/>
            <div className='words-container'>
                <p>Color</p>
                <Plus size={16} />
            </div>
            <hr/>
            <div className='words-container'>
                <p>Seasonal</p>
                <Plus size={16} />
            </div>
            <hr/>
            <div className='words-container'>
                <p>Light Efficient</p>
                <Plus size={16} />
            </div>
        </div>
    )
  }


  return(
    <>
      <div className='search-main-container'>
        {renderSearchContainer()}
      </div>
      <div className='products-main-container'>
        <div>
            {renderSideBar()}
        </div>
        <div>
            {renderProducts()}
        </div>
      </div>
    </>
  )
}

export default Products