puts File.readlines('input').inject(0) { |freq, change| freq += change.to_i }
