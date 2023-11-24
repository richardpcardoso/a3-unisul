

function dijkstra(graph, start, end, vehicleType) {
    const distances = {};
    const times = {};
    const visited = {};
    const path = {};
    const queue = Object.keys(graph);
  
    queue.forEach((node) => {
      distances[node] = Infinity;
      times[node] = Infinity;
    });
    distances[start] = 0;
    times[start] = 0;
  
    while (queue.length > 0) {
      let minNode = null;
  
      queue.forEach((node) => {
        if (minNode === null || distances[node] < distances[minNode]) {
          if (!visited[node]) {
            minNode = node;
          }
        }
      });
  
      if (minNode === null) break;
  
      const neighbors = graph[minNode];
      for (let neighbor in neighbors) {
        const cost = neighbors[neighbor][vehicleType];
        if (cost) {
          const { distance, time } = cost;
          const newDistance = distances[minNode] + distance;
          const newTime = times[minNode] + time;
  
          if (newDistance < distances[neighbor]) {
            distances[neighbor] = newDistance;
            times[neighbor] = newTime;
            path[neighbor] = minNode;
          }
        }
      }
  
      visited[minNode] = true;
      queue.splice(queue.indexOf(minNode), 1);
    }
  
    let currentNode = end;
    const shortestPath = [currentNode];
    while (currentNode !== start) {
      shortestPath.unshift(path[currentNode]);
      currentNode = path[currentNode];
    }
  
    return {
      distance: distances[end],
      time: times[end],
      path: shortestPath,
    };
  }
  
  // Exemplo de utilização
  // const startLocation = "Florianópolis";
  // const destination = "Palhoça";
  // const vehicleType = "car"; // Tipo de veículo desejado (carro, ônibus, bicicleta, etc.)
  // const result = dijkstra(graph, startLocation, destination, vehicleType);
  // console.log(
  //   `Menor distância entre ${startLocation} e ${destination} para ${vehicleType}: ${result.distance}`
  // );
  // console.log(
  //   `Menor tempo entre ${startLocation} e ${destination} para ${vehicleType}: ${result.time} minutos`
  // );
  // console.log(`Caminho: ${result.path.join(" -> ")}`);

  
export default dijkstra;