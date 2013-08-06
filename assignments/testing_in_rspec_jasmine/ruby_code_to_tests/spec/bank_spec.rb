require_relative 'spec_helper'
require_relative '../bank'

describe Bank do
  let(:bank) {Bank.new('First Hawaiian Bank')}

  describe ".new" do
    it "creates a new bank object" do
      expect(bank).to_not eq nil
    end
    it "has no accounts" do
      expect(bank.accounts.count).to eq 0
    end
  end

  describe "#{name}" do
    it "has a name" do
      expect(bank.name).to eq "First Hawaiian Bank"
    end
  end

  describe "#create_account" do
    it "creates a new account" do
      bank.create_account('checking', 150)
      expect(bank.accounts['checking']).to eq 150
      expect(bank.accounts.count).to eq 1
    end
  end

  describe "#deposit" do
    it "updates the amount in the account" do
    bank.create_account('savings', 300)
    bank.deposit('savings', 400)
    expect(bank.accounts['savings']).to eq 700
    end
  end

  describe "#withdraw" do
    it "updates the amount in the account" do
    bank.create_account('401K', 1000)
    bank.withdraw('401K', 400)
    expect(bank.accounts['401K']).to eq 600
    end
  end

  describe "#balance" do
    it "shows the amount in the account" do
      bank.create_account('offshore', 100000)
      bank.balance('offshore')
      expect(bank.accounts['offshore']).to eq 100000
    end
  end


end