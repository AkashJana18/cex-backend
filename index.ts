import express from "express";

const app = express();
const PORT = 4000;
app.use(express.json());

//Types
type UserId = String;
type OrderId = String;
type FillId = String;

type QuoteCurrency = "USD";
type MarketAssest = "SOL" | "BTC";
type Currency = QuoteCurrency | MarketAssest;

type OrderSide = "buy" | "sell";
type OrderType = "limit" | "market";
type OrderStatus = "open" | "filled" | "partially_filled" | "cancelled";

type Integer = number;
type Price = Integer;
type Quantity = Integer;
type Timestamp = number;

interface User {
  id: UserId,
  username: string,
  passwordHash: string,
} 

interface Balance {
  available: Integer,
  locked: Integer,
}

type UserBalances = Record<Currency, Balance>;

interface Market {
  symbol: MarketAssest,
  name: string,
  baseAssest: MarketAssest,
  quoteAssest: QuoteCurrency,
  isActive: boolean,
}

interface Order {
  id: OrderId,
  userId: UserId,
  market: MarketAssest,
  side: OrderSide,
  type: OrderType,
  price: Price,
  qty :Quantity,
  filledQty: Quantity,
  status: OrderStatus,
  createdAt: Timestamp,
  updatedAt: Timestamp,
}

interface Fill {
  id: FillId,
  orderId: OrderId,
  userId: UserId,
  market: MarketAssest,
  side: OrderSide,
  type: OrderType,
  price: Price,
  qty :Quantity,
  timestamp: Timestamp,
}

interface OrderBookOrder {
  orderId: OrderId;
  userId: UserId;
  price: Price;
  qty: Quantity;
  remainingQty: Quantity;
  createdAt: Timestamp;
}


interface OrderBook {
  market: MarketAssest,
  bids: OrderBookOrder[],
  asks: OrderBookOrder[],
}

interface OpenOrder {
  type: OrderType,
  price: Price | null,
  qty: Quantity,
  market: MarketAssest,
  side: OrderSide,
}

interface OrderResponse {
  orderId: OrderId,
  filledQty: filledQty,
  averagePrice: Price,
}

app.get("/health-check"", (_req, res)=>{
  return res.json({
  status : "ok",
  });
});

app.listen(PORT, ()=>{
  console.log(`listening on Port : ${PORT}`);
  
});
