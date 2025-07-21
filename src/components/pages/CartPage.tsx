import { Minus, Plus, X, ShoppingBag, ArrowLeft, CreditCard, Shield } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Separator } from '../ui/separator';
import { Badge } from '../ui/badge';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { useCart } from '../CartContext';
import { useRouter } from '../Router';

export function CartPage() {
  const { items, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart();
  const { navigateTo } = useRouter();
  const total = getTotalPrice();
  const tax = total * 0.08; // 8% tax
  const grandTotal = total + tax;

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-md mx-auto text-center">
            <ShoppingBag className="w-16 h-16 mx-auto text-muted-foreground mb-6" />
            <h2 className="mb-4">Your cart is empty</h2>
            <p className="text-muted-foreground mb-8">
              Looks like you haven't added any classes to your cart yet.
            </p>
            <Button onClick={() => navigateTo('classes')}>
              Browse Classes
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-8">
          <Button 
            variant="ghost" 
            onClick={() => navigateTo('classes')}
            className="mr-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Continue Shopping
          </Button>
          <div>
            <h1>Shopping Cart</h1>
            <p className="text-muted-foreground">{items.length} {items.length === 1 ? 'class' : 'classes'} in your cart</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <Card key={item.id}>
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.title}
                      className="w-24 h-24 rounded-lg object-cover"
                    />
                    
                    <div className="flex-1 space-y-3">
                      <div className="flex justify-between">
                        <div>
                          <h3 className="line-clamp-1">{item.title}</h3>
                          <p className="text-sm text-muted-foreground">with {item.instructor}</p>
                          <p className="text-sm text-muted-foreground">{item.studio}</p>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <X className="w-4 h-4" />
                        </Button>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="text-sm text-muted-foreground">
                          <Badge variant="outline" className="mr-2">
                            {item.date}
                          </Badge>
                          <Badge variant="outline">
                            {item.time}
                          </Badge>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Minus className="w-3 h-3" />
                          </Button>
                          <span className="w-8 text-center text-sm">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-lg">${item.price * item.quantity}</span>
                        {item.quantity > 1 && (
                          <span className="text-sm text-muted-foreground">
                            ${item.price} each
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            <div className="flex justify-between items-center pt-4">
              <Button variant="outline" onClick={clearCart}>
                Clear Cart
              </Button>
              <Button variant="ghost" onClick={() => navigateTo('classes')}>
                Add More Classes
              </Button>
            </div>
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Service Fee</span>
                    <span>$2.99</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span>Total</span>
                    <span>${(grandTotal + 2.99).toFixed(2)}</span>
                  </div>
                </div>

                <Button className="w-full" size="lg">
                  <CreditCard className="w-4 h-4 mr-2" />
                  Proceed to Checkout
                </Button>

                <div className="flex items-center justify-center text-sm text-muted-foreground">
                  <Shield className="w-4 h-4 mr-1" />
                  Secure checkout
                </div>
              </CardContent>
            </Card>

            {/* Promo Code */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Promo Code</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2">
                  <Input placeholder="Enter promo code" />
                  <Button variant="outline">Apply</Button>
                </div>
              </CardContent>
            </Card>

            {/* Payment Methods */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">We Accept</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2">
                  <div className="w-10 h-6 bg-blue-600 rounded text-white text-xs flex items-center justify-center">
                    VISA
                  </div>
                  <div className="w-10 h-6 bg-orange-500 rounded text-white text-xs flex items-center justify-center">
                    MC
                  </div>
                  <div className="w-10 h-6 bg-blue-500 rounded text-white text-xs flex items-center justify-center">
                    AMEX
                  </div>
                  <div className="w-10 h-6 bg-blue-800 rounded text-white text-xs flex items-center justify-center">
                    PP
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}