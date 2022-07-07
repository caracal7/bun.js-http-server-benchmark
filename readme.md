# Install

curl -fsSL https://bun.sh/install | bash
npm init

and install **wrk** :)

# Run Bun

bun bun.ts

in another terminal

wrk -t4 -c2500 -d60s http://localhost:3000

# Run NodeJs

node node.js

in another terminal

wrk -t4 -c2500 -d60s http://localhost:3000

# Run uWebSockets

node uws.js

in another terminal

wrk -t4 -c2500 -d60s http://localhost:3000

# Results

## Bun

4 threads and 2500 connections
Thread Stats   Avg      Stdev     Max   +/- Stdev
  Latency     1.84ms  677.59us  51.62ms   98.15%
  Req/Sec    33.12k     5.98k   44.06k    54.67%
7909754 requests in 1.00m, 618.55MB read
Socket errors: connect 2253, read 66743, write 0, timeout 0
Requests/sec: 131794.88
Transfer/sec:     10.31MB


## NodeJs

Running 1m test @ http://localhost:3000
  4 threads and 2500 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     5.83ms  698.23us  63.27ms   93.93%
    Req/Sec    10.64k     2.80k   14.46k    57.33%
  2541401 requests in 1.00m, 305.38MB read
  Socket errors: connect 2253, read 76, write 0, timeout 0
Requests/sec:  42345.45
Transfer/sec:      5.09MB

## uWebSockets

Running 1m test @ http://localhost:3000
  4 threads and 2500 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     2.27ms  264.81us  17.05ms   89.57%
    Req/Sec    27.25k    11.07k   37.16k    75.00%
  6508319 requests in 1.00m, 366.20MB read
  Socket errors: connect 2253, read 90, write 0, timeout 0
Requests/sec: 108457.71
Transfer/sec:      6.10MB
