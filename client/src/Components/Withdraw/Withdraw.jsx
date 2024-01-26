import React, { useState } from 'react';
import { Button, Card, CardContent, CardHeader, Input, MenuItem, Select, Typography } from '@mui/material';


function Withdraw() {
    return (
      <div className="mt-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <Typography variant="subtitle1" component="div">
              Withdraw Funds
            </Typography>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="amount">Amount</label>
                <Input id="amount" placeholder="Enter amount" />
              </div>
              <div className="space-y-2">
                <label htmlFor="method">Method</label>
                <Select id="method">
                  <MenuItem value="credit-card">Credit Card</MenuItem>
                  <MenuItem value="paypal">PayPal</MenuItem>
                  <MenuItem value="bank-transfer">Bank Transfer</MenuItem>
                </Select>
              </div>
              <Button className="w-full" type="submit">
                Withdraw Funds
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

export default Withdraw;
