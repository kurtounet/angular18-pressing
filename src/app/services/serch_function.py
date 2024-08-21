# import os
# import re
#
#
# def extract_methods_from_file(file_path):
#   with open(file_path, 'r') as file:
#     content = file.read()
#
#   # Regex to match method definitions
#   method_pattern = re.compile(r'\b(\w+)\s*\([^)]*\)\s*{', re.MULTILINE)
#
#   methods = []
#   for match in method_pattern.finditer(content):
#     method_name = match.group(1)
#     methods.append(method_name)
#
#   return methods
#
#
# def list_methods_in_services(directory):
#   services_methods = {}
#
#   for filename in os.listdir(directory):
#     if filename.endswith(".ts"):
#       file_path = os.path.join(directory, filename)
#       service_name = filename.replace('.ts', '')
#       methods = extract_methods_from_file(file_path)
#       services_methods[service_name] = methods
#
#   return services_methods
#
#
# # Usage example
# directory_path = r'F:\angular-pressing\angular18-pressing\src\app\services'  # Replace with the path to your services directory
# methods_in_services = list_methods_in_services(directory_path)
#
# for service, methods in methods_in_services.items():
#   print(f"Service: {service}")
#   if methods:
#     for method in methods:
#       print(f"  - Method: {method}")
#   else:
#     print("  - No methods found.")

# # V3
# import os
# import re
#
#
# def extract_methods_from_file(file_path):
#   with open(file_path, 'r') as file:
#     content = file.read()
#
#   methods = []
#
#   # Regex to match normal method definitions (with or without public/private/protected)
#   method_pattern = re.compile(r'^\s*(public|private|protected)?\s*(\w+)\s*\(.*\)\s*{', re.MULTILINE)
#
#   # Regex to match arrow functions (lambda functions)
#   arrow_function_pattern = re.compile(r'(\w+)\s*=\s*\(.*\)\s*=>\s*{', re.MULTILINE)
#
#   # Find all normal method definitions
#   methods += method_pattern.findall(content)
#
#   # Find all arrow function definitions
#   methods += arrow_function_pattern.findall(content)
#
#   # Clean the list of methods to extract just the method names
#   method_names = [match[1] if isinstance(match, tuple) else match for match in methods]
#
#   return method_names
#
#
# def list_methods_in_services(directory):
#   services_methods = {}
#
#   for filename in os.listdir(directory):
#     if filename.endswith(".ts"):
#       file_path = os.path.join(directory, filename)
#       service_name = filename.replace('.ts', '')
#       methods = extract_methods_from_file(file_path)
#       services_methods[service_name] = methods
#
#   return services_methods
#
#
# # Usage example
# directory_path = r'F:\angular-pressing\angular18-pressing\src\app\services'  # Replace with the path to your services directory
# methods_in_services = list_methods_in_services(directory_path)
#
# for service, methods in methods_in_services.items():
#   print(f"Service: {service}")
#   for method in methods:
#     print(f"  - Method: {method}")


# import os
# import re
#
#
# def extract_methods_from_file(file_path):
#   with open(file_path, 'r') as file:
#     content = file.read()
#
#   # Regex to match method definitions
#   method_pattern = re.compile(r'\b(public|private|protected)?\s*\b(\w+)\s*\([^)]*\)\s*{', re.MULTILINE)
#
#   methods = []
#   for match in method_pattern.finditer(content):
#     method_name = match.group(2)
#     methods.append(method_name)
#
#   return methods
#
#
# def list_methods_in_services(directory):
#   services_methods = {}
#
#   for filename in os.listdir(directory):
#     if filename.endswith(".ts"):
#       file_path = os.path.join(directory, filename)
#       service_name = filename.replace('.ts', '')
#       methods = extract_methods_from_file(file_path)
#       services_methods[service_name] = methods
#
#   return services_methods
#
#
# # Usage example
# directory_path = r'F:\angular-pressing\angular18-pressing\src\app\services'  # Replace with the path to your services directory
# methods_in_services = list_methods_in_services(directory_path)
#
# for service, methods in methods_in_services.items():
#   print(f"Service: {service}")
#   if methods:
#     for method in methods:
#       print(f"  - Method: {method}")
#   else:
#     print("  - No methods found.")
# V1
# import os
# import re
#
#
# def extract_methods_from_file(file_path):
#   with open(file_path, 'r') as file:
#     lines = file.readlines()
#
#   methods = []
#   method_pattern = re.compile(r'^\s*(public|private|protected)?\s*\w+\s*\(.*\)\s*{')
#
#   for line in lines:
#     line = line.strip()
#     if method_pattern.match(line):
#       # Extract the method name
#       method_name = line.split("(")[0].split()[-1]
#       methods.append(method_name)
#
#   return methods
#
#
# def list_methods_in_services(directory):
#   services_methods = {}
#
#   for filename in os.listdir(directory):
#     if filename.endswith(".ts"):
#       file_path = os.path.join(directory, filename)
#       service_name = filename.replace('.ts', '')
#       methods = extract_methods_from_file(file_path)
#       services_methods[service_name] = methods
#
#   return services_methods
#
#
# # Usage example
# directory_path = r'F:\angular-pressing\angular18-pressing\src\app\services'  # Replace with the path to your services directory
# methods_in_services = list_methods_in_services(directory_path)
#
# for service, methods in methods_in_services.items():
#   print(f"Service: {service}")
#   for method in methods:
#     print(f"  - Method: {method}")
# import os
# import re
#
#
# def extract_methods_from_file(file_path):
#   with open(file_path, 'r') as file:
#     content = file.read()
#
#   # Regex to match method definitions
#   method_pattern = re.compile(r'\b(\w+)\s*\([^)]*\)\s*{', re.MULTILINE)
#
#   methods = []
#   for match in method_pattern.finditer(content):
#     method_name = match.group(1)
#     methods.append(method_name)
#
#   return methods
#
#
# def list_methods_in_services(directory):
#   services_methods = {}
#
#   for filename in os.listdir(directory):
#     if filename.endswith(".ts") and not filename.endswith(".spec.ts"):
#       file_path = os.path.join(directory, filename)
#       service_name = filename.replace('.ts', '')
#       methods = extract_methods_from_file(file_path)
#       services_methods[service_name] = methods
#
#   return services_methods
#
#
# # Usage example
# directory_path = r'F:\angular-pressing\angular18-pressing\src\app\services'  # Replace with the path to your services directory
# methods_in_services = list_methods_in_services(directory_path)
#
# for service, methods in methods_in_services.items():
#   print(f"Service: {service}")
#   if methods:
#     for method in methods:
#       print(f"  - Method: {method}")
#   else:
#     print("  - No methods found.")
import os
import re


def extract_methods_from_file(file_path):
  with open(file_path, 'r') as file:
    content = file.read()

  # Regex to match method definitions more accurately
  method_pattern = re.compile(r'\b(\w+)\s*\([^)]*\)\s*{', re.MULTILINE)

  methods = set()  # Using a set to avoid duplicates
  for match in method_pattern.finditer(content):
    method_name = match.group(1)
    # Avoid common keywords that are not method names
    if method_name not in {"if", "for", "while", "catch", "constructor", "ngOnInit"}:
      methods.add(method_name)

  return sorted(methods)


def list_methods_in_services(directory):
  services_methods = {}

  for filename in os.listdir(directory):
    if filename.endswith(".ts") and not filename.endswith(".spec.ts"):
      file_path = os.path.join(directory, filename)
      service_name = filename.replace('.ts', '')
      methods = extract_methods_from_file(file_path)
      services_methods[service_name] = methods

  return services_methods


# Usage example
directory_path = r'F:\angular-pressing\angular18-pressing\src\app\services'   # Replace with the path to your services directory
methods_in_services = list_methods_in_services(directory_path)

for service, methods in methods_in_services.items():
  print(f"Service: {service}")
  if methods:
    for method in methods:
      print(f"  - Method: {method}")
  else:
    print("  - No methods found.")
