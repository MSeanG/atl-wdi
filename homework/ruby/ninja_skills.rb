#1
def testab
  a = true
  b = false
  if a == true && b == true
    puts "false"
  else
    puts "true"
  end
end

#2
x = "nil"
puts x + " was hear"
print x
puts x.class

#3
d = "Fixnum"
e = "Float"
d==e
puts d

#4
christine = "Hi, I'm Christine"
likesTo = "long walks on the beach, kinda."
puts christine + " and I like " + likesTo

#5
def times_two(i)
  i*2
end
times_two(3)

print "Enter your name: "
name = gets
puts "Hello #{name}"