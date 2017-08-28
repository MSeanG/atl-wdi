# asking for subtotal
p "What's your subtotal?"
subtotal = gets.chomp.to_f

p subtotal

p "Number of people to pay"
people = gets.chomp.to_f

p people

puts %q{
  Tip percent?
  1. 10%
  2. 15%
  3. 20%
  4. Other
}

percent = STDIN.gets.chomp

p percent

case percent
  when "1"
    tip_percent = 0.10
  when "2"
    tip_percent = 0.15
  when "3"
    tip_percent = 0.20
  when "4"
    tip_percent = gets.chomp.to_f
end

p tip_percent

p "What's the tax percentage?"
tax_precent = gets.chop.to_f

p tax_precent

tax_value = subtotal * tax_percent

# meal_with_tax = subtotal + tax_value
meal_with_tax = subtotal + tax_value

# total_value = meal_with_tax * tip_percent/100
# total = meal_with_tax + tip_value