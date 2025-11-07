# Microservice Fusion Engine - Service Implementation

This repository contains three microservices designed to work with the Microservice Fusion Engine. Each service has v1 and v2 versions that can run in both standalone and fused modes.

## Services

1. **Customer Service** - Manages customer data
2. **Order Service** - Handles order processing
3. **Product Service** - Manages product catalog

## Service Structure

Each service follows this structure:
```
service-name-v1/
├── index.js
├── package.json
├── routes/
│   └── [resource].routes.js
└── controllers/
    └── [resource].controller.js
```

## Features

- ✅ Version-specific routes (/v1, /v2)
- ✅ Stateless design (no global state)
- ✅ Metadata in all responses (version, mode)
- ✅ Health check endpoints
- ✅ Backward compatibility maintained
- ✅ Ready for fusion mode

## Installation

Navigate to each service directory and install dependencies:

```bash
cd customer-service-v1
npm install

cd ../customer-service-v2
npm install

# Repeat for order-service-v1, order-service-v2, product-service-v1, product-service-v2
```

## Running Services

### Standalone Mode

```bash
# Customer Service v1
cd customer-service-v1
npm start

# Customer Service v2
cd customer-service-v2
npm start

# Order Service v1
cd order-service-v1
npm start

# Order Service v2
cd order-service-v2
npm start

# Product Service v1
cd product-service-v1
npm start

# Product Service v2
cd product-service-v2
npm start
```

### Fusion Mode

Set the `MODE` environment variable:

```bash
MODE=fusion npm start
```

## API Endpoints

### Customer Service

**v1:**
- `GET /v1/customers` - Get all customers
- `GET /v1/customers/:id` - Get customer by ID
- `POST /v1/customers` - Create customer
- `PUT /v1/customers/:id` - Update customer
- `DELETE /v1/customers/:id` - Delete customer

**v2:**
- `GET /v2/customers` - Get all customers (with pagination)
- `GET /v2/customers/:id` - Get customer by ID
- `POST /v2/customers` - Create customer
- `PATCH /v2/customers/:id` - Update customer (partial)
- `DELETE /v2/customers/:id` - Delete customer (soft delete)
- `GET /v2/customers/:id/orders` - Get customer orders

### Order Service

**v1:**
- `GET /v1/orders` - Get all orders
- `GET /v1/orders/:id` - Get order by ID
- `POST /v1/orders` - Create order
- `PUT /v1/orders/:id` - Update order
- `DELETE /v1/orders/:id` - Delete order

**v2:**
- `GET /v2/orders` - Get all orders (with filters & pagination)
- `GET /v2/orders/:id` - Get order by ID
- `POST /v2/orders` - Create order
- `PATCH /v2/orders/:id` - Update order (partial)
- `DELETE /v2/orders/:id` - Delete order (soft delete)
- `GET /v2/orders/customer/:customerId` - Get orders by customer
- `POST /v2/orders/:id/cancel` - Cancel order

### Product Service

**v1:**
- `GET /v1/products` - Get all products
- `GET /v1/products/:id` - Get product by ID
- `POST /v1/products` - Create product
- `PUT /v1/products/:id` - Update product
- `DELETE /v1/products/:id` - Delete product

**v2:**
- `GET /v2/products` - Get all products (with filters & pagination)
- `GET /v2/products/:id` - Get product by ID
- `POST /v2/products` - Create product
- `PATCH /v2/products/:id` - Update product (partial)
- `DELETE /v2/products/:id` - Delete product (soft delete)
- `GET /v2/products/category/:category` - Get products by category
- `POST /v2/products/:id/stock` - Update stock

## Health Checks

All services expose a health check endpoint:
```
GET /health
```

Response:
```json
{
  "status": "healthy",
  "version": "v1",
  "mode": "standalone",
  "service": "customer-service"
}
```

## Response Format

All responses include metadata:
```json
{
  "data": "...",
  "metadata": {
    "version": "v1",
    "mode": "standalone",
    "service": "customer-service"
  }
}
```

## Ports

Default ports (configurable via PORT environment variable):
- Customer Service v1: 3001
- Customer Service v2: 3002
- Order Service v1: 4001
- Order Service v2: 4002
- Product Service v1: 5001
- Product Service v2: 5002

## Development

For development with auto-reload:
```bash
npm run dev
```

## Fusion Engine Compatibility

✅ No global state tied to instance
✅ No hardcoded base URLs
✅ Backward compatibility maintained
✅ Version-specific routes
✅ Stateless design
✅ Metadata in responses

## License

MIT

